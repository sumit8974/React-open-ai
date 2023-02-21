import React from "react";
import "./Chat.css";
import ChatStripe from "./ChatStripe";
const Chat = ({ isLoading, chats }) => {
  return (
    <div className="chat-container">
      <ChatStripe isLoading={isLoading} chats={chats} />
    </div>
  );
};

export default Chat;
