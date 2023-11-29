import React, { useState, useEffect } from "react";
import { connect, sendMsg } from "./api";
import { useMediaQuery } from "@mui/material";

import "./App.css";

import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";
import NameDialog from "./components/NameDialog";

export default function App() {
  const [chatHistory, setChatHistory] = useState([]);
  const [inputMsg, setInputMsg] = useState("");
  const [open, setOpen] = useState(true);
  const [name, setName] = useState("");

  const handleChatHistory = (msg) => {
    const newChatHistory = [...chatHistory, msg];
    setChatHistory(newChatHistory);
  };

  useEffect(() => {
    if (name && !open) {
      connect(handleChatHistory, name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, open, chatHistory]);

  const handleInput = (event) => {
    setInputMsg(event.target.value);
  };

  const send = () => {
    if (inputMsg === "") return;
    sendMsg(inputMsg, name, 1);
    setInputMsg("");
  };

  const handleClose = () => {
    setOpen(false);
    sendMsg(`${name} Joined...`, name, 2);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <NameDialog
        open={open}
        handleClose={handleClose}
        name={name}
        handleNameChange={handleNameChange}
      />
      <div style={{ width: "100%" }}>
        <Header />
      </div>
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
    </div>
  );
}
