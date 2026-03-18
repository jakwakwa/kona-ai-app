import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI, Type, FunctionDeclaration } from '@google/genai';
import { db } from '@/lib/firebase';
import { doc, getDoc, collection, addDoc, serverTimestamp } from 'firebase/firestore';

export async function POST(req: NextRequest) {
  try {
    const { messages, clientId } = await req.json();

    if (!clientId || !messages) {
      return NextResponse.json({ error: 'Missing clientId or messages' }, { status: 400 });
    }

    let geminiApiKey = '';
    let systemInstruction = '';

    if (clientId === 'PLATFORM') {
      geminiApiKey = process.env.GOOGLE_GENERATIVE_AI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY || '';
      systemInstruction = "You are the Kona AI Platform Agent. Your goal is to convert visitors into qualified appointments. You are aware of South African business nuances, such as load shedding, bakkies, and Rands.";
    } else {
      // 1. Verify Tenant Subscription & Fetch Config
      const clientRef = doc(db, 'clients', clientId);
      const configRef = doc(db, 'clients', clientId, 'config', 'agent');
      
      const [clientSnap, configSnap] = await Promise.all([
        getDoc(clientRef),
        getDoc(configRef)
      ]);

      if (!clientSnap.exists() || !clientSnap.data().subscriptionActive) {
        return NextResponse.json({ error: 'Assistant offline. Please contact support.' }, { status: 403 });
      }

      const configData = configSnap.data() || {};
      geminiApiKey = configData.geminiApiKey;
      systemInstruction = configData.systemInstruction || "You are a helpful Kona AI assistant. Keep responses focused on the business. Be aware of South African context like load shedding and Rands.";
    }

    if (!geminiApiKey) {
      return NextResponse.json({ error: 'API Key not configured for this tenant.' }, { status: 400 });
    }

    // 2. Initialise Gemini with Tenant's Key
    const ai = new GoogleGenAI({ apiKey: geminiApiKey });

    const captureLeadDeclaration: FunctionDeclaration = {
      name: 'captureLead',
      description: 'Capture lead details when interest is shown.',
      parameters: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING },
          email: { type: Type.STRING },
          phone: { type: Type.STRING },
          interest: { type: Type.STRING }
        },
        required: ["name"]
      }
    };

    // 3. Process Conversation
    // Format messages for @google/genai
    const contents = messages.map((m: any) => ({
      role: m.role === 'user' ? 'user' : 'model',
      parts: m.parts || [{ text: m.content || '' }]
    }));

    const responseStream = await ai.models.generateContentStream({
      model: "gemini-3-flash-preview",
      contents,
      config: {
        systemInstruction,
        tools: [{ functionDeclarations: [captureLeadDeclaration] }]
      }
    });

    // 4. Stream Response & Handle Tools
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of responseStream) {
            const chunkText = chunk.text;
            const calls = chunk.functionCalls;

            if (chunkText) {
              controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'text', content: chunkText })}\n\n`));
            }

            if (calls?.length) {
              for (const call of calls) {
                if (call.name === 'captureLead') {
                  const args = call.args as any;
                  // Save lead to central Firestore (CEO View)
                  await addDoc(collection(db, 'leads'), {
                    clientId,
                    ...args,
                    status: 'DRAFT_PENDING',
                    createdAt: serverTimestamp()
                  });
                  controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'tool', message: 'Lead saved' })}\n\n`));
                }
              }
            }
          }
          controller.close();
        } catch (e) {
          controller.error(e);
        }
      }
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache' }
    });

  } catch (error: any) {
    console.error('Kona Proxy Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
