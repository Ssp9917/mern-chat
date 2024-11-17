import React, { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import axios from "../config/axiosInstance";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const {messages,setMessages,selectedConversation} = useConversation()

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await axios(`/api/message/${selectedConversation._id}`);
        console.log(res);
        const data = res.data;
        setMessages(data);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

   if(selectedConversation?._id) getMessages();
  }, [selectedConversation?._id,setMessages]);

  return { loading, messages };
};

export default useGetMessage;
