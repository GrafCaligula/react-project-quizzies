import React from "react";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";

export default function App() {
  const [isStarted, setIsStartet] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [questionsArray, setQuestionsArray] = React.useState([]);
  const [check, setCheck] = React.useState(false);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
      .then((result) => result.json())
      .then((data) => setData(data.results));
  }, [isStarted]);

  function startQuiz() {
    setIsStartet(true);
    buildQuestionsArray(data);
  }

  function decode(string) {
    return String(string)
      .replace(/&amp;/g, "&")
      .replace(/&gt;/g, ">")
      .replace(/&lt;/g, "<")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'")
      .replace(/&Uuml;/g, "Ü")
      .replace(/&eacute;/g, "é");
  }

  function buildQuestionsArray(data) {
    let qArray = [];
    data.map((item) =>
      qArray.push({
        question: decode(item.question),
        correctAnswer: decode(item.correct_answer),
        answersArray: buildAnswersArray(
          decode(item.correct_answer),
          item.incorrect_answers.map((ans) => decode(ans))
        ),
      })
    );
    setQuestionsArray(qArray);
    console.log(qArray);
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

  function viewResults() {
    let answers = document.getElementsByClassName("answer");
    for (let i = 0; i < answers.length; i++) {
      answers[i].childNodes[0].disabled = true;
      if (answers[i].childNodes[0].checked === true) {
        answers[i].childNodes[1].style.backgroundColor = "#f8bcbc80";
        answers[i].childNodes[1].style.border = "1px solid #f8bcbc80";
      }
    }
    let items = document.getElementsByClassName("correct");
    for (let i = 0; i < items.length; i++) {
      items[i].style.backgroundColor = "#94D7A2ff";
      items[i].style.border = "1px solid #94D7A2ff";
    }
    setCheck(prevState => !check);
    //  console.log(items)
  }

  return (
    <div className="app">
      {!isStarted ? (
        <Welcome start={startQuiz} />
      ) : (
        <Quiz
          questions={questionsArray}
          handleCheck={viewResults}
          check={check}
        />
      )}
    </div>
  );
}
