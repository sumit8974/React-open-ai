import React from "react";
import "./Form.css";
const Form = ({ userData, setInput, clickButton }) => {
  function handleKey(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      clickButton();
    }
  }
  return (
    <div className="form">
      <textarea
        name=""
        id=""
        cols="1"
        rows="1"
        placeholder="Ask OpenAI....."
        onChange={(e) => setInput(e.target.value)}
        value={userData}
        onKeyDown={handleKey}
      ></textarea>
      <button type="submit" onClick={clickButton}>
        <img src="send.svg" alt="....."></img>
      </button>
    </div>
  );
};

export default Form;
