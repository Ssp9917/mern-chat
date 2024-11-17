import React, { useState } from 'react';
import { BsSend } from 'react-icons/bs';
import useSendMessage from '../../hooks/useSendMessage';

const MessageInput = () => {
  const [message,setMessage] = useState('');

  const {loading,sendMessage} = useSendMessage()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return
    console.log(message)
    await sendMessage(message)
    setMessage('')
  }

  return (
    <form onSubmit={handleSubmit} className='flex items-center px-4 py-3 border-t bg-gray-100'>
      <input
        type='text'
        className='flex-1 px-4 py-2 border rounded-full outline-none text-sm bg-white placeholder-gray-400 border-gray-300 focus:border-blue-500'
        placeholder='Type a message...'
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
      />
      <button
        type='submit'
        className='p-2 ml-2 text-blue-500 hover:text-blue-600 transition-colors'
      >
        {/* <BsSend className='w-5 h-5' /> */}
        {loading?"Sending":"Send"}
      </button>
    </form>
  );
};

export default MessageInput;
