import React, { useState } from 'react';
import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500); // Simulating logout process
  };

  return (
    <button
      onClick={handleLogout}
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
