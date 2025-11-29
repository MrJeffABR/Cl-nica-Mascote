import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot as BotIcon } from 'lucide-react';
import { ChatMessage, ChatSender } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Bot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      text: 'Olá! 🐾 Sou o assistente virtual da Clínica Mascote. Como posso ajudar você e seu pet hoje?',
      sender: ChatSender.BOT,
      timestamp: new Date()
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      text: input,
      sender: ChatSender.USER,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    // Prepare history for context
    const history = messages.slice(-5).map(m => `${m.sender === ChatSender.USER ? 'Cliente' : 'Mascote Bot'}: ${m.text}`);

    try {
      const responseText = await sendMessageToGemini(userMsg.text, history);
      
      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: ChatSender.BOT,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      // Error handled inside service, but safe fallback
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-brand-light overflow-hidden flex flex-col transition-all duration-300 transform origin-bottom-right">
          {/* Header */}
          <div className="bg-brand-teal p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <BotIcon className="w-6 h-6" />
              <div>
                <h3 className="font-bold text-sm">Mascote Assistente</h3>
                <p className="text-xs text-brand-light opacity-90">Online agora</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-teal-700 p-1 rounded transition">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`max-w-[85%] p-3 rounded-lg text-sm shadow-sm ${
                  msg.sender === ChatSender.USER
                    ? 'bg-brand-teal text-white self-end rounded-br-none'
                    : 'bg-white text-gray-800 self-start rounded-bl-none border border-gray-100'
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="self-start bg-white p-3 rounded-lg rounded-bl-none shadow-sm border border-gray-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Digite sua dúvida..."
              className="flex-1 text-sm px-3 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-teal text-gray-700"
            />
            <button
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-brand-orange text-white p-2 rounded-full hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? 'rotate-90 opacity-0 pointer-events-none' : 'rotate-0 opacity-100'
        } absolute bottom-0 right-0 transition-all duration-300 bg-brand-teal hover:bg-teal-700 text-white p-4 rounded-full shadow-lg group`}
        aria-label="Abrir chat"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-gray-800 text-xs font-bold px-2 py-1 rounded shadow whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
          Fale conosco
        </span>
      </button>

      {/* Close button that appears when chat is open (in the same spot as toggle) is handled by the window header X, 
          but usually a floating action button transforms. For simplicity, we just hide the big FAB when open. */}
    </div>
  );
};

export default Bot;