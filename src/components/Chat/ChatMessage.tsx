import React from 'react';

interface ChatMessageProps {
  message: string;
  isBot: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isBot }) => {
  return (
    <div className={`mb-4 ${isBot ? 'mr-12' : 'ml-12'}`}>
      <div className={`rounded-lg p-3 ${
        isBot ? 'bg-primary' : 'bg-accent/10'
      }`}>
        <p className="text-surface">{message}</p>
      </div>
    </div>
  );
};

export default ChatMessage;