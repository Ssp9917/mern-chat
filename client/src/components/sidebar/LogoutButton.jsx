import React, { useState } from 'react'
import { BiLogOut } from "react-icons/bi";

import { CiLogout } from "react-icons/ci";
const LogoutButton = () => {

  const [loading,setLoading] = useState(false)

  return (
    <div className='mt-auto'>
      {!loading ? (
        <CiLogout className='w-6 h-6 text-black cursor-pointer'/>
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogoutButton