import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

export async function POST(req: NextRequest) {
  try {
    const { apiKey } = await req.json();

    if (!apiKey) {
      return NextResponse.json({ error: 'API key is required' }, { status: 400 });
    }

    // Initialize GoogleGenAI locally with the provided key
    const ai = new GoogleGenAI({ apiKey });

    // Run a small test call to Gemini
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: 'Respond with "OK" if you receive this message.',
      config: {
        maxOutputTokens: 5,
      }
    });

    if (response.text) {
      return NextResponse.json({ success: true, message: 'Key validated successfully' });
    } else {
      return NextResponse.json({ error: 'Invalid response from Gemini API' }, { status: 400 });
    }

  } catch (error: any) {
    console.error('Validation API Error:', error);
    return NextResponse.json({ error: 'Invalid API key or connection error' }, { status: 400 });
  }
}
