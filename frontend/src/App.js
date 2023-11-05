import React from "react";
import "./App.css";
import { connect, sendMsg } from "./api";

export default function App() {
  connect();
  return (
    <div className="App">
      <button onClick={() => sendMsg("bro")}>Send</button>
    </div>
  );
}
