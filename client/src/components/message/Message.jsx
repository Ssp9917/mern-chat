import React from 'react';

const Message = ({ isSent = true }) => {
  return (
    <div className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}>
      <div className={`p-3 rounded-lg text-sm ${isSent ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} max-w-xs`}>
        {isSent ? "This is a sent message" : "This is a received message"}
      </div>
    </div>
  );
};

export default Message;
