import React, { useEffect, useRef } from "react";
import "./Chat.css";
import Spinner from "react-bootstrap/Spinner";
import "bootstrap/dist/css/bootstrap.css";
import { TypeAnimation } from "react-type-animation";
const ChatStripe = ({ isLoading, chats }) => {
  const scrollRef = useRef(null);
  let writing = false;
  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    writing = true;
    const interval = setInterval(() => {
      if (!writing) {
        clearInterval(interval);
        return;
      }
      scrollToBottom();
    }, 1000);
    return () => clearInterval(interval);
  }, [isLoading]);
  useEffect(() => {
    scrollToBottom();
  }, [isLoading]);

  return (
    <>
      {chats?.map((chat, index) => {
        return (
          <div
            className={`wrapper ${chat.isAi && "ai"}`}
            key={index}
            ref={scrollRef}
          >
            <div className="chat">
              <div className="profile">
                <img
                  src={`../../src/assets/${chat.isAi ? "bot.svg" : "user.svg"}`}
                  alt="..."
                ></img>
              </div>
              {index === chats.length - 1 && chat.isAi ? (
                <div className="message">
                  <TypeAnimation
                    sequence={[
                      `${chat.msg}`,
                      1000,
                      () => {
                        writing = false;
                        scrollToBottom();
                      },
                    ]}
                    speed={75}
                  />
                </div>
              ) : (
                <div className="message">{chat.msg}</div>
              )}
            </div>
          </div>
        );
      })}
      {isLoading && (
        <div className="wrapper ai">
          <div className="chat">
            <div className="profile">
              <img src="bot.svg" alt="..."></img>
            </div>
            <div className="message">
              <Spinner animation="border" variant="light" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatStripe;
