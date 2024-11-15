import React from 'react';
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className='flex items-center gap-2 bg-gray-50 rounded-full px-2 py-1'>
      <input
        type='text'
        placeholder='Search...'
        className='bg-transparent flex-grow outline-none text-sm text-gray-700 placeholder-gray-500'
      />
      <button
        type='submit'
        className='p-1 rounded-full  text-gray-700  focus:outline-none'
      >
        <IoSearchSharp className='w-5 h-5' />
      </button>
    </form>
  );
};

export default SearchInput;
