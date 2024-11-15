import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';

const MessageContainer = () => {
  return (
    <div className='flex flex-col  bg-white shadow-md md:w-full'>
      {/* Header */}
      <div className='bg-gray-500 px-4 py-3 text-white flex items-center justify-between'>
        <span className='font-semibold text-lg'>Chat with</span>
        <span className='font-bold text-xl'>John Doe</span>
      </div>

      {/* Messages List */}
      <Messages />

      {/* Message Input */}
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
