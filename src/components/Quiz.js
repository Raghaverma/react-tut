import React, { useState } from 'react';

const Quiz = ({ questions, onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
    setShowResults(true);
    if (onComplete) {
      onComplete(newScore, questions.length);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedAnswers({});
  };

  if (showResults) {
    return (
      <div className="quiz-results">
        <h3>Quiz Results</h3>
        <p>You scored {score} out of {questions.length}</p>
        <div className="answers-review">
          {questions.map((question, index) => (
            <div key={index} className="question-review">
              <p>{question.question}</p>
              <p className={selectedAnswers[index] === question.correctAnswer ? 'correct' : 'incorrect'}>
                Your answer: {question.answers[selectedAnswers[index]]}
              </p>
              {selectedAnswers[index] !== question.correctAnswer && (
                <p className="correct-answer">
                  Correct answer: {question.answers[question.correctAnswer]}
                </p>
              )}
            </div>
          ))}
        </div>
        <button onClick={resetQuiz}>Try Again</button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h3>Test Your Knowledge</h3>
      <div className="question">
        <p>{questions[currentQuestion].question}</p>
        <div className="answers">
          {questions[currentQuestion].answers.map((answer, index) => (
            <button
              key={index}
              className={`answer-button ${
                selectedAnswers[currentQuestion] === index ? 'selected' : ''
              }`}
              onClick={() => handleAnswerSelect(currentQuestion, index)}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
      <div className="quiz-navigation">
        {currentQuestion > 0 && (
          <button onClick={() => setCurrentQuestion(currentQuestion - 1)}>
            Previous
          </button>
        )}
        {currentQuestion < questions.length - 1 ? (
          <button onClick={() => setCurrentQuestion(currentQuestion + 1)}>
            Next
          </button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Quiz; 