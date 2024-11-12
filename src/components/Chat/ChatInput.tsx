import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-accent/20">
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-primary rounded-lg px-4 py-2 text-surface focus:outline-none focus:ring-2 focus:ring-accent"
        />
        <button 
          type="submit"
          className="btn-primary px-4 py-2 flex items-center gap-2"
          disabled={!message.trim()}
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;