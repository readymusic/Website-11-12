import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import { findAnswer } from '../../utils/chatbotUtils';

interface ChatbotProps {
  onClose: () => void;
}

interface Message {
  text: string;
  isBot: boolean;
  isTyping?: boolean;
}

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { 
      text: "Hi! I'm your Ready Music Studios assistant. How can I help you today?", 
      isBot: true 
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (message: string) => {
    // Add user message
    setMessages(prev => [...prev, { text: message, isBot: false }]);

    // Add typing indicator
    setMessages(prev => [...prev, { text: "", isBot: true, isTyping: true }]);

    // Get bot response with artificial delay for natural feel
    setTimeout(() => {
      const response = findAnswer(message);
      
      // Remove typing indicator and add response
      setMessages(prev => {
        const withoutTyping = prev.filter(msg => !msg.isTyping);
        return [...withoutTyping, { text: response, isBot: true }];
      });
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 w-96 bg-primary-dark rounded-xl shadow-xl border-2 border-accent/20 z-50">
      <div className="flex items-center justify-between p-4 border-b border-accent/20">
        <h3 className="text-surface font-semibold">Ready Music Assistant</h3>
        <button 
          onClick={onClose}
          className="text-surface/60 hover:text-surface transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="h-96 overflow-y-auto p-4">
        {messages.map((msg, index) => (
          msg.isTyping ? (
            <div key={index} className="flex space-x-2 mb-4 mr-12">
              <div className="bg-primary rounded-lg p-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <div className="w-2 h-2 bg-accent rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          ) : (
            <ChatMessage 
              key={index}
              message={msg.text}
              isBot={msg.isBot}
            />
          )
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbot;