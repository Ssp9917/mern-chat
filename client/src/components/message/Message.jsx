import React from "react";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const isSent = message.senderId === authUser._id;
  const profilePic = isSent
    ? authUser.profilePic
    : selectedConversation?.profilePic;


    const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"}`}>
      {!isSent && (
        <div>
          <img src={profilePic} alt="" width={35} />
        </div>
      )}
      <div
        className={`p-3 rounded-lg text-sm ${shakeClass} ${
          isSent ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800"
        } max-w-xs`}
      >
        {message.message}
      </div>

      {isSent && (
        <div>
          <img src={profilePic} alt="" width={35} />
        </div>
      )}
    </div>
  );
};

export default Message;
