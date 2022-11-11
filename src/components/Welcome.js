import React from "react";

export default function Welcome(props) {
  return (
    <div className="welcome">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button 
      className="welcome-btn"
      onClick={props.start}
      >
      Start Quiz
      </button>
    </div>
  );
}
