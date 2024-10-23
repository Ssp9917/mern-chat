import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../components'
import LoadingSpinner from '../components/LoadingSpinner'

const Main = () => {

    const [loading,setLoading] = useState(false)

    return (
        <div className="bg-white h-full">
            {loading ? (
                <LoadingSpinner />
            ) : (
                <div>
                    {/* <Navbar /> */}
                    <div className="min-h-screen">
                        <Outlet />
                    </div>
                    {/* <Footer /> */}
                </div>
            )}
        </div>
    )
}

export default Main