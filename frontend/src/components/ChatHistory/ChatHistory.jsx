import React, { useEffect, useRef } from "react";

import Message from "../Message";

const ChatHistory = ({ chatHistory, userName }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [chatHistory]);
  const messages = chatHistory.map((msg, index) => {
    const msgType = JSON.parse(msg.data).type;
    const msgUser = JSON.parse(msg.data).user_id;
    const isSentByCurrentUser = userName === msgUser;
    const backgroundColor =
      msgType === 2 ? "" : isSentByCurrentUser ? "#DCF8C6" : "#f5f5f5";
    const leftAlignment =
      msgType === 2 ? "auto" : isSentByCurrentUser ? "auto" : "none";
    const rightAlignment =
      msgType === 2 ? "auto" : isSentByCurrentUser ? "none" : "auto";

    if (msgType === 2 && isSentByCurrentUser) {
      return null;
    }

    return (
      <div
        key={index}
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: backgroundColor,
          marginTop: "10px",
          borderRadius: "10px",
          width: "fit-content",
          marginLeft: leftAlignment,
          marginRight: rightAlignment,
        }}
      >
        <Message key={index} message={msg.data} user={userName} />
      </div>
    );
  });

  return (
    <div
      style={{
        padding: "20px",
        // backgroundColor: "#f5f5f5",
        borderRadius: "5px",
        overflowY: "scroll",
        scrollbarWidth: "none",
      }}
    >
      {messages}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatHistory;
