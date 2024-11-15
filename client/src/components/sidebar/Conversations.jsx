import React from 'react';
import Conversation from './Conversation';

const Conversations = () => {
  return (
    <div className='flex flex-col gap-3 overflow-y-auto'>
      {[...Array(8)].map((_, index) => (
        <Conversation key={index} />
      ))}
    </div>
  );
};

export default Conversations;
