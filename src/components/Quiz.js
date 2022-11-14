import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function Quiz(props) {  
  console.log(props)
  const questionElements = props.questions.map((item, index) => (
    <Question 
    key={nanoid()} 
    id={index} 
    question={item.question}
    correctAnswer={item.correct_answer}
    incorrectAnswers={item.incorrect_answers}
    />
  ));

  return (
    <div className="quiz-wrapper">
      {questionElements}
      <button className="btn-check" >Check answers</button>
    </div>
  );
}

// item:

//   category: "Entertainment: Television",
//   type: "multiple",
//   difficulty: "easy",
//   question:
//     "How many seasons did the Sci-Fi television show "Stargate Atlantis" have?",
//   correct_answer: "5",
//   incorrect_answers: ["10", "2", "7"],