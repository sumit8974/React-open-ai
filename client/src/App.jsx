import { useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./components/Form";
import Chat from "./components/Chat";

function App() {
  const [userInput, setUserInput] = useState("");
  const [allChat, setAllChat] = useState([
    { isAi: true, msg: "Hello from open AI..." },
  ]);
  const [isLoading, setLoading] = useState(false);
  async function handleClick() {
    const client = {
      isAi: false,
      msg: userInput,
    };
    allChat.push(client);
    setLoading(true);
    const question = userInput;
    setUserInput("");
    // API request
    const response = await fetch("ADD THE API ROUTE OF OPEN AI", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: question,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      const parsedData = data.bot.trim();
      const ai = {
        isAi: true,
        msg: parsedData,
      };
      allChat.push(ai);
    } else {
      const err = await response.text();
      console.log(err);
    }
    setLoading(false);
  }
  return (
    <div className="App">
      <h2>Ask Anthing.....</h2>
      <Chat isLoading={isLoading} chats={allChat} />
      <Form
        userData={userInput}
        setInput={setUserInput}
        clickButton={handleClick}
      />
    </div>
  );
}

export default App;
