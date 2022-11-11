import React from "react";

export default function Question(props) {
  /**
   * Helper-function replace encoded characters
   */
  function decode(string) {
    return String(string)
      .replace(/&amp;/g, "&")
      .replace(/&gt;/g, ">")
      .replace(/&lt;/g, "<")
      .replace(/&quot;/g, '"')
      .replace(/&#039;/g, "'");
  }

  // category: "Entertainment: Television",
  // type: "multiple",
  // difficulty: "easy",
  // question:
  //   "How many seasons did the Sci-Fi television show &quot;Stargate Atlantis&quot; have?",
  // correct_answer: "5",
  // incorrect_answers: ["10", "2", "7"],

  const answerElements = [];

  for (let i = 1; i < 5; i++) {
    answerElements.push(<button className={`btn-answer ${i}`}>
      {i === 1 ? decode(props.data.correct_answer) : decode(props.data.incorrect_answers[i - 2])}
    </button>);
  }

  return (
    <div className="question">
      <h2>{decode(props.data.question)}</h2>
      <div className="answers">
      {
        props.data.type === "multiple" ?
      answerElements :
      (<div><input type="radio"></input><input type="radio"></input></div>)
      }
      </div>
      <hr />
    </div>
  );
}
