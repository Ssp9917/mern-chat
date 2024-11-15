import React from 'react';
import { BsSend } from 'react-icons/bs';

const MessageInput = () => {
  return (
    <form className='flex items-center px-4 py-3 border-t bg-gray-100'>
      <input
        type='text'
        className='flex-1 px-4 py-2 border rounded-full outline-none text-sm bg-white placeholder-gray-400 border-gray-300 focus:border-blue-500'
        placeholder='Type a message...'
      />
      <button
        type='submit'
        className='p-2 ml-2 text-blue-500 hover:text-blue-600 transition-colors'
      >
        <BsSend className='w-5 h-5' />
      </button>
    </form>
  );
};

export default MessageInput;
