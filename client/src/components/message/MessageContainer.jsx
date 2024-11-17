import React, { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(()=>{
    // clean up function (unmount)
    return () => setSelectedConversation(null)
  },[])

  return (
    <div className="flex flex-col   bg-white shadow-md md:w-[400px]">
      {/* Header */}

      {!selectedConversation ? (
        <NoChatSelected/>
      ) : (
        <div>
          <div className="bg-gray-500 px-4 py-3 text-white flex items-center justify-between">
            <span className="font-semibold text-lg">Chat with</span>
            <span className="font-bold text-xl">{selectedConversation.fullName}</span>
          </div>
          {/* Messages List */}
          <div className="overflow-y-scroll h-[81vh]">
          <Messages />

          </div>

          {/* Message Input */}
          <MessageInput />
        </div>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl  font-semibold flex flex-col items-center gap-2'>
				<p className="text-black">Welcome 👋<span className="text-sky-500"> {authUser.fullName}</span> ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};
