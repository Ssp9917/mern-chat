import React, { useEffect, useState } from 'react'
import axios from '../config/axiosInstance'

const useGetConvertations = () => {
 const [loading,setLoading] = useState(false)
 const [conversations,setConversations] = useState([])

 useEffect(
    ()=>{
        const getConvertations = async () => {
            setLoading(true);
            try {
                const res = await axios('/api/user');
                console.log(res)
                const data = res.data
                setConversations(data)
                
            } catch (error) {
                
            }finally{
                setLoading(false)
            }
        }

        getConvertations();
    },[]

 )

 return {loading,conversations}
}

export default useGetConvertations