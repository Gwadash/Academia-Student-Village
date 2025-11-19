import { GoogleGenAI } from "@google/genai";
import { ACADEMIA_SYSTEM_INSTRUCTION } from "../constants";

let client: GoogleGenAI | null = null;

const getClient = () => {
  if (!client) {
    const apiKey = process.env.API_KEY || '';
    if (!apiKey) {
      console.error("API Key is missing");
      return null;
    }
    client = new GoogleGenAI({ apiKey });
  }
  return client;
};

export const sendMessageToGemini = async (message: string, history: { role: string; parts: { text: string }[] }[]) => {
  const ai = getClient();
  if (!ai) return "I'm sorry, I cannot connect to the server right now. Please try again later.";

  try {
    // Convert history to format expected by @google/genai if needed, 
    // though for simple one-off generation or chat, we handle context manually or use chat session.
    // Here we will use the chat session for continuity.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: ACADEMIA_SYSTEM_INSTRUCTION,
      },
      history: history.map(h => ({
        role: h.role,
        parts: h.parts
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I'm having trouble processing your request. Please contact the office directly at 072 323 0062.";
  }
};