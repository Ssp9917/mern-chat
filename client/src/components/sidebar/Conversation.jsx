import React from 'react';

const Conversation = () => {
  return (
    <div className='flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer transition-all duration-150'>
      <div className='w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-white'>
        J
      </div>
      <div className='flex-1'>
        <p className='text-sm font-medium text-gray-700'>John Doe</p>
        <p className='text-xs text-gray-500 truncate'>Hey, how are you?</p>
      </div>
      <span className='text-xs text-gray-400'>12:45 PM</span>
    </div>
  );
};

export default Conversation;
