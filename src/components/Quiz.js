import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function Quiz(props) {  

  const questionElements = props.questions.map((item) => (
    <Question key={nanoid()} data={item} />
  ));

  return (
    <div className="quiz-wrapper">
      {questionElements}
      <button className="btn-check" >Check answers</button>
    </div>
  );
}
