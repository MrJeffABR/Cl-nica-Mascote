import { GoogleGenAI } from "@google/genai";

// System instruction to guide the AI's persona
const SYSTEM_INSTRUCTION = `
Você é o assistente virtual da 'Clínica Mascote', localizada em Confresa, Mato Grosso.
Seu tom é acolhedor, profissional, empático e carinhoso (estilo 'pet lover').
Seu objetivo é tirar dúvidas básicas sobre cuidados com cães e gatos e incentivar o agendamento de consultas.

Informações chave:
- História: Cuidando com amor desde 2019.
- Destaque: Atendimento Plantão 24h e Emergências.
- Serviços: Consultas, Internações, Cirurgias, Ultrassom, Eletrocardiograma, Exames Laboratoriais (Mascote Lab), Vacinação, Banho e Tosa.
- Loja Pet (NOVO): Vendemos rações (Cães e Gatos), brinquedos, camas e medicamentos. Os pedidos podem ser feitos pelo WhatsApp.
- Localização: Confresa, MT.
- Endereço: Av. Mato Grosso, 86.
- Agendamento: Sempre peça para o cliente entrar em contato pelo WhatsApp (66) 98424-2728 para agendamentos, compras de produtos ou emergências.
- Laboratório: Temos exames de alta precisão no local (Mascote Lab).
- Instagram: @mascoteclab (https://www.instagram.com/mascoteclab/)

Regras:
1. Respostas curtas e diretas (máximo 3 frases).
2. Não faça diagnósticos médicos complexos. Sugira a consulta presencial.
3. Se perguntarem preço, diga que varia conforme o caso e peça para chamar no WhatsApp.
4. Em caso de emergência, enfatize o Plantão 24h e peça para ir à clínica ou ligar imediatamente.
5. Use emojis ocasionalmente 🐶 🐱.
`;

export const sendMessageToGemini = async (message: string, history: string[]): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Desculpe, meu sistema de comunicação está temporariamente indisponível. Por favor, contate-nos via WhatsApp.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    // We maintain a simple history context string for this lightweight implementation
    const prompt = `
    ${SYSTEM_INSTRUCTION}
    
    Histórico da conversa:
    ${history.join('\n')}
    
    Nova mensagem do cliente: ${message}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash', // Fast and efficient for chat
      contents: prompt,
    });

    return response.text || "Desculpe, não entendi. Poderia repetir?";
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "Tive um pequeno problema técnico. Pode nos chamar no WhatsApp?";
  }
};