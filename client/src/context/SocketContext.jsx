import React, { createContext, useContext, useEffect, useState } from 'react'
import { useAuthContext } from './AuthContext'
import io from 'socket.io-client'

const SocketContext = createContext()

export const useSocketContext = () => {
    return useContext(SocketContext)
}

const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext()

    const BackendLiveUrl = import.meta.env.VITE_BACKEND_BASE_URL


    useEffect(() => {
        if (authUser) {
            const socket = io(BackendLiveUrl, {
                query: {
                    userId: authUser._id,
                },
            });

            setSocket(socket);

            // socket.on() is used to listen to the events. can be used both on client and server side
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });

            return () => socket.close();
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
    }, [authUser]);

    return (
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketContextProvider