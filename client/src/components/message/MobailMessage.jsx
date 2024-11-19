import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // For accessing URL params and navigation
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import useConversation from "../../zustand/useConversation";
import { TiMessages } from "react-icons/ti";
import { IoArrowBack } from "react-icons/io5"; // Back button icon
import { useAuthContext } from "../../context/AuthContext";

const MobailMessage = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { id } = useParams(); // Retrieve conversation ID from URL
  const navigate = useNavigate();

  useEffect(() => {
    // Mock fetching selected conversation from server
    // if (id) {
    //   const fetchConversation = async () => {
    //     // Replace this with your actual API or data fetching logic
    //     const mockConversation = { _id: id};
    //     setSelectedConversation(mockConversation);
    //   };
    //   fetchConversation();
    // }

    // Clean up function (unmount)

    // return () => setSelectedConversation(null);
  }, [id, setSelectedConversation]);

  return (
    <div className="flex-col h-screen md:hidden bg-white shadow-md md:w-[400px]">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <div>
          {/* Header with Back Button */}
          <div className="bg-gray-500 px-4 py-3 text-white flex items-center justify-between md:justify-end">
            <button
              className="flex md:hidden items-center gap-2 text-white text-lg font-semibold"
              onClick={() => navigate("/")} // Navigate back to home
            >
              <IoArrowBack className="text-2xl" /> Back
            </button>
            <span className="font-bold text-xl ">{selectedConversation.fullName}</span>
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

export default MobailMessage;

const NoChatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl font-semibold flex flex-col items-center gap-2">
        <p className="text-black">
          Welcome 👋<span className="text-sky-500"> {authUser.fullName}</span> ❄
        </p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
