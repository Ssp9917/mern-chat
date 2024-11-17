import React from "react";
import Message from "./Message";
import useGetMessage from "../../hooks/useGetMessage";
import messageImg from '../../assets/message.png'
import useListenMessage from "../../hooks/useListenMessage";

const Messages = () => {
  const { messages, loading } = useGetMessage();
  useListenMessage()

  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
      {loading && (
        <div className="space-y-3">
          {/* Skeleton for loading state */}
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className={`flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`${
                  index % 2 === 0 ? "bg-gray-300" : "bg-blue-300"
                } w-3/4 h-6 rounded-md animate-pulse`}
              ></div>
            </div>
          ))}
        </div>
      )}

      {!loading && messages.length === 0 && (
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <img
            src={messageImg}
            alt="No messages"
            className="w-32 rounded-xl h-32"
          />
          <p className="text-gray-600 text-center">
            Send a message to start this conversation!
          </p>
        </div>
      )}

      {!loading &&
        messages.length > 0 &&
        messages.map((message, index) => (
          <Message key={index} message={message} />
        ))}
    </div>
  );
};

export default Messages;
