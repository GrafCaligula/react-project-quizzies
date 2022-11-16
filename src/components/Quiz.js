import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function Quiz(props) {
  const questionElements = props.questions.map((item, index) => (
    <Question
      key={nanoid()}
      id={index + 1}
      question={item.question}
      correctAnswer={item.correctAnswer}
      answersArray={item.answersArray}
      

    />
  ));

  return (
    <div className="quiz-wrapper">
      {questionElements}
      <button className="btn-check" onClick={props.handleCheck}>
        {props.check ? "Reset Quiz" : "Check answers"}
      </button>
    </div>
  );
}
 