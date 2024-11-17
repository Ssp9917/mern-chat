import React from "react";
import Conversation from "./Conversation";
import useGetConvertations from "../../hooks/useGetConvertations";
import { useSocketContext } from "../../context/SocketContext";

const Conversations = () => {
  const { loading, conversations } = useGetConvertations();

  return (
    <div className="flex flex-col gap-3 overflow-y-auto p-4">
      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        conversations.map((conversation, index) => (
          <Conversation key={index} conversation={conversation}  />
        ))
      )}
    </div>
  );
};

export default Conversations;
