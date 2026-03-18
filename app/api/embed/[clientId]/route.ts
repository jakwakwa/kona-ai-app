import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function GET(req: NextRequest, { params }: { params: Promise<{ clientId: string }> }) {
  const { clientId } = await params;

  try {
    const clientRef = doc(db, 'clients', clientId);
    const clientSnap = await getDoc(clientRef);

    if (!clientSnap.exists() || !clientSnap.data().subscriptionActive) {
      return new NextResponse('console.warn("Kona AI: Assistant offline or client not found.");', {
        headers: { 'Content-Type': 'application/javascript' }
      });
    }

    const data = clientSnap.data();
    const primaryColour = data.primaryColour || '#4f46e5';
    const origin = new URL(req.url).origin;

    const script = `
      (function() {
        const clientId = '${clientId}';
        const primaryColour = '${primaryColour}';
        const origin = '${origin}';

        // Create container
        const container = document.createElement('div');
        container.id = 'kona-ai-widget-container';
        container.style.position = 'fixed';
        container.style.bottom = '20px';
        container.style.right = '20px';
        container.style.zIndex = '999999';
        container.style.display = 'flex';
        container.style.flexDirection = 'column';
        container.style.alignItems = 'flex-end';
        container.style.fontFamily = 'sans-serif';

        // Create iframe
        const iframe = document.createElement('iframe');
        iframe.src = origin + '/widget/' + clientId;
        iframe.style.width = '380px';
        iframe.style.height = '600px';
        iframe.style.border = 'none';
        iframe.style.borderRadius = '16px';
        iframe.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
        iframe.style.marginBottom = '16px';
        iframe.style.display = 'none';
        iframe.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        iframe.style.opacity = '0';
        iframe.style.transform = 'translateY(10px)';

        // Create toggle button
        const button = document.createElement('button');
        button.style.width = '60px';
        button.style.height = '60px';
        button.style.borderRadius = '50%';
        button.style.backgroundColor = primaryColour;
        button.style.color = 'white';
        button.style.border = 'none';
        button.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
        button.style.cursor = 'pointer';
        button.style.display = 'flex';
        button.style.alignItems = 'center';
        button.style.justifyContent = 'center';
        button.style.transition = 'transform 0.2s ease';
        
        // SVG Icon
        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';

        let isOpen = false;

        button.addEventListener('click', () => {
          isOpen = !isOpen;
          if (isOpen) {
            iframe.style.display = 'block';
            // Trigger reflow
            void iframe.offsetWidth;
            iframe.style.opacity = '1';
            iframe.style.transform = 'translateY(0)';
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
          } else {
            iframe.style.opacity = '0';
            iframe.style.transform = 'translateY(10px)';
            setTimeout(() => {
              iframe.style.display = 'none';
            }, 300);
            button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>';
          }
        });

        button.addEventListener('mouseenter', () => {
          button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
          button.style.transform = 'scale(1)';
        });

        container.appendChild(iframe);
        container.appendChild(button);
        document.body.appendChild(container);
      })();
    `;

    return new NextResponse(script, {
      headers: { 'Content-Type': 'application/javascript' }
    });

  } catch (error) {
    console.error('Embed API Error:', error);
    return new NextResponse('console.error("Kona AI: Failed to load widget.");', {
      headers: { 'Content-Type': 'application/javascript' }
    });
  }
}
