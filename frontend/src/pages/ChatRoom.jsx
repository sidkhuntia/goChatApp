import React from "react";
import { useNavigate } from "react-router-dom";

import ChatHistory from "../components/ChatHistory";
import ChatInput from "../components/ChatInput";

const ChatRoom = ({
  chatHistory,
  send,
  handleInput,
  inputMsg,
  name,
  isMobile,
}) => {
  const navigate = useNavigate();
  if (name === "") {
    navigate("/");
  }
  

  return (
    <>
      <div
        style={{
          flexGrow: 1,
          overflowY: "auto",
          width: isMobile ? "100%" : "50%",
        }}
      >
        <ChatHistory chatHistory={chatHistory} userName={name} />
      </div>
      <div style={{ width: isMobile ? "100%" : "50%" }}>
        <ChatInput send={send} handleInput={handleInput} inputMsg={inputMsg} />
      </div>
    </>
  );
};

export default ChatRoom;
