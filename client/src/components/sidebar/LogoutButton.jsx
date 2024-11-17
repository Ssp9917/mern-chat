import React, { useState } from 'react';
import { CiLogout } from "react-icons/ci";
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
 

  const { loading, logout } = useLogout();

  return (
    <button
      onClick={logout}
      className='flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-500 transition-colors duration-150'
      disabled={loading}
    >
      {loading ? (
        <span className='loading loading-spinner w-5 h-5 border-t-2 border-gray-400'></span>
      ) : (
        <CiLogout className='w-5 h-5' />
      )}
      Logout
    </button>
  );
};

export default LogoutButton;
