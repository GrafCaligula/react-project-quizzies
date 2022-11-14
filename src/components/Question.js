import React from "react";
import { nanoid } from "nanoid";

export default function Question(props) {
  //Helper-function replace encoded characters

  function decode(string) {
    return String(string)
      .replace(/&amp;/g, "&")
      .replace(/&gt;/g, ">")
      .replace(/&lt;/g, "<")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  }

  const answerElements = [];

  for (let i = 1; i <= 4; i++) {
    answerElements.push(
      <div key={nanoid()}>
        <input 
        type="radio" 
        id={`answer${props.id}${i}`} 
        name={`answers${props.id}`}
        />
        <label 
        htmlFor={`answer${props.id}${i}`} 
        >
          {i === 1
            ? decode(props.correctAnswer)
            : decode(props.incorrectAnswers[i - 2])}
        </label>
      </div>
    );
  }

  return (
    <div className="question">
      <h2>{decode(props.question)}</h2>
      <div className="answers-wrapper">{answerElements}</div>
      <hr />
    </div>
  );
}
