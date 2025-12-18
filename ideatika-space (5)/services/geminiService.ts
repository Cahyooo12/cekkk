
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `You are the AI consultant for Ideatika Space, a premier creative agency. 
Our philosophy is "Where Creativity Drives Innovation." 
We simplify the complex by transforming intricate concepts into compelling stories.
Our activities include:
- Brand Strategy Development
- Website Building
- Workshops
- Creative Content Production
Be bold, professional, and slightly futuristic in your tone. Help users understand how we can bring their vision to life.`;

export async function getGeminiResponse(prompt: string): Promise<string> {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm sorry, I'm currently refining my creative thoughts. Please ask again.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "The innovation bridge is under maintenance. Please try again soon.";
  }
}
