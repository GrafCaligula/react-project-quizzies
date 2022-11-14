import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function Quiz(props) {
  function checkAnswers() {
    let answers = document.getElementsByClassName("answer");
    for (let i = 0; i < answers.length; i++) {
      answers[i].childNodes[0].disabled = true;
      if (answers[i].childNodes[0].checked === true) {
        answers[i].childNodes[1].style.backgroundColor = "#f8bcbc";
      }
    }

    let items = document.getElementsByClassName("correct");
    for (let i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = "#94D7A2";
    }
    //  console.log(items)
  }

  function buildAnswersArray(corrAns, incorrAns) {
    let ansArr = [...incorrAns];
    const rndIndex = getRandomAnswerIndex();
    ansArr = ansArr
      .slice(0, rndIndex)
      .concat(corrAns)
      .concat(ansArr.slice(rndIndex));
    return ansArr;
  }

  function getRandomAnswerIndex() {
    return Math.floor(Math.random() * 4);
  }

  const questionElements = props.questions.map((item, index) => (
    <Question
      key={nanoid()}
      id={index + 1}
      question={item.question}
      correctAnswer={item.correct_answer}
      answersArray={buildAnswersArray(
        item.correct_answer,
        item.incorrect_answers
      )}
    />
  ));

  return (
    <div className="quiz-wrapper">
      {questionElements}
      <button className="btn-check" onClick={checkAnswers}>
        Check answers
      </button>
    </div>
  );
}
