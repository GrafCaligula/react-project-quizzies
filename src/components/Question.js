import React from "react";
import { nanoid } from "nanoid";

export default function Question(props) {
  const answerElements = [];

  for (let i = 1; i <= 4; i++) {
    answerElements.push(
      <div key={nanoid()} className="answer">
        <input
          type="radio"
          id={`answer${props.id}${i}`}
          name={`answers${props.id}`}
        />
        <label
          id={`ans${props.id}${i}`}
          htmlFor={`answer${props.id}${i}`}
          className={
            props.correctAnswer === props.answersArray[i - 1]
              ? "correct"
              : "incorrect"
          }
        >
          {props.answersArray[i - 1]}
        </label>
      </div>
    );
  }

  return (
    <div className="question">
      <h2>{props.question}</h2>
      <div className="answers-wrapper">{answerElements}</div>
      <hr />
    </div>
  );
}
