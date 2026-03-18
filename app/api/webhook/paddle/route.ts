import { NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // In a real app, verify Paddle webhook signature here
    
    if (body.event_type === 'subscription.activated') {
      const data = body.data;
      const customData = data.custom_data || {};
      const ownerId = customData.ownerId; // Passed during checkout
      const email = data.customer?.email || 'unknown@example.com';
      const businessName = customData.businessName || `${email}'s Business`;
      
      if (!ownerId) {
        return NextResponse.json({ error: 'Missing ownerId in custom_data' }, { status: 400 });
      }

      // Atomic write using Firestore batch
      const batch = adminDb.batch();
      
      // We need to query for the client by ownerId, or create one if it doesn't exist.
      // Since webhooks might arrive out of order, we should be careful.
      // For simplicity, let's assume the client document might already exist (created by dashboard)
      // or we create a new one.
      
      const clientsRef = adminDb.collection('clients');
      const snapshot = await clientsRef.where('ownerId', '==', ownerId).get();
      
      let clientRef;
      if (snapshot.empty) {
        clientRef = clientsRef.doc();
        batch.set(clientRef, {
          ownerId,
          name: businessName,
          subscriptionActive: true,
          paddleSubscriptionId: data.id,
          primaryColour: '#4f46e5',
          createdAt: new Date().toISOString()
        });
        
        const configRef = clientRef.collection('config').doc('agent');
        batch.set(configRef, {
          geminiApiKey: '',
          systemInstruction: 'You are a helpful assistant for our business. Keep responses focused on our business and refuse unrelated queries. You can capture leads by asking for their name, email, and phone number. Be aware of South African context like load shedding (schedules are subject to the current load shedding stage), bakkies, and Rands.',
          updatedAt: new Date().toISOString()
        });
      } else {
        clientRef = snapshot.docs[0].ref;
        batch.update(clientRef, {
          subscriptionActive: true,
          paddleSubscriptionId: data.id,
        });
      }

      await batch.commit();
      console.log(`Provisioned client and agent config for ownerId ${ownerId}`);
    } else if (body.event_type === 'subscription.canceled' || body.event_type === 'subscription.past_due') {
      const data = body.data;
      const customData = data.custom_data || {};
      const ownerId = customData.ownerId;

      if (ownerId) {
        const clientsRef = adminDb.collection('clients');
        const snapshot = await clientsRef.where('ownerId', '==', ownerId).get();
        if (!snapshot.empty) {
          await snapshot.docs[0].ref.update({
            subscriptionActive: false,
          });
          console.log(`Deactivated subscription for ownerId ${ownerId}`);
        }
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
