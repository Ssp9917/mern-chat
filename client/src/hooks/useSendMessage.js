import React, { useState } from 'react'
import useConversation from '../zustand/useConversation'
import axios from '../config/axiosInstance';

const useSendMessage = () => {
 
    const [loading,setLoading]=useState(false)
    const {messages,setMessages,selectedConversation}= useConversation();

    const sendMessage = async (message) => {
        console.log(message)
        setLoading(true)
        try {
            const res = await axios.post(`/api/message/send/${selectedConversation._id}`,{message})

            console.log(res)

            const data = res.data
            setMessages([...messages,data])
        } catch (error) {
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    return {loading,sendMessage}
}

export default useSendMessage