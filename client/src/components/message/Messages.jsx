import React from 'react';
import Message from './Message';

const Messages = () => {
  return (
    <div className='flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3'>
      {[...Array(12)].map((_, index) => (
        <Message key={index} />
      ))}
    </div>
  );
};

export default Messages;
