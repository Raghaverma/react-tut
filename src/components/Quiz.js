import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
  };

  if (showResult) {
    return (
      <div className="quiz-results">
        <h3>Quiz Complete!</h3>
        <p>Your score: {score} out of {questions.length}</p>
        <div className="feedback">
          {score === questions.length ? (
            <p>Perfect score! Great job! 🎉</p>
          ) : score >= questions.length * 0.7 ? (
            <p>Well done! Keep practicing! 👍</p>
          ) : (
            <p>Keep learning and try again! 💪</p>
          )}
        </div>
        <button onClick={handleRetry} className="retry-button">
          Try Again
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="question-counter">
        Question {currentQuestion + 1} of {questions.length}
      </div>
      <div className="question">
        <h3>{question.question}</h3>
        <div className="answers">
          {question.answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(answer)}
              className={`answer-button ${selectedAnswer === answer ? 'selected' : ''}`}
            >
              {answer}
            </button>
          ))}
        </div>
      </div>
      <div className="quiz-navigation">
        <button
          onClick={handleNext}
          disabled={!selectedAnswer}
          className="next-button"
        >
          {currentQuestion + 1 === questions.length ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Quiz; 