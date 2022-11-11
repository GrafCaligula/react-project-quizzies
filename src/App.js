import React from "react";
import Welcome from "./components/Welcome";
import Quiz from "./components/Quiz";

export default function App() {
  const [isStarted, setIsStartet] = React.useState(false);
  const [questions, setQuestions] = React.useState([]);

  console.log("render");

  React.useEffect(() => {
    console.log("effect");
    fetch("https://opentdb.com/api.php?amount=5&category=15&type=multiple")
    .then(result => result.json())
    .then(data => setQuestions(data.results))
    .then(console.log(questions))
    
  }, [])


  function startQuiz() {
    setIsStartet(true);
  }
  
  return (
    <div className="app">
      {!isStarted ? 
      <Welcome start={startQuiz} /> : <Quiz questions={questions}/>
      }
    </div>
  );
}
