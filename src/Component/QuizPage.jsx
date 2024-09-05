import React, { useState, useEffect, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingBar from "react-top-loading-bar";

const Quiz = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { quizData } = location.state || {};

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [userAnswers, setUserAnswers] = useState([]);
  const [progress, setProgress] = useState(0);

  // Memoize the resetGame function
  const resetGame = useCallback(() => {
    const shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowAnswer(false);
    setUserAnswers([]);
    setProgress(0);
  }, [quizData]);

  useEffect(() => {
    if (quizData) {
      resetGame();
    } else {
      toast.error("No quiz data available.");
      navigate("/");
    }
  }, [quizData, navigate, resetGame]);

  const handleAnswerOptionClick = (selectedOption) => {
    const isCorrect = selectedOption === questions[currentQuestion].answer;

    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const answerObject = {
      question: questions[currentQuestion].question,
      userAnswer: selectedOption,
      correctAnswer: questions[currentQuestion].answer,
      isCorrect: isCorrect,
    };

    setUserAnswers((prevUserAnswers) => [...prevUserAnswers, answerObject]);
    setShowAnswer(true);
    setProgress(100);

    setTimeout(
      () => {
        setShowAnswer(false);
        setProgress(0);

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < questions.length) {
          setCurrentQuestion(nextQuestion);
        } else {
          const isDataConsistent = questions.length === userAnswers.length;
          if (isDataConsistent) {
            toast("🦄 Quiz Completed!", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            navigate("/quizreport", { state: { userAnswers } });
          }
        }
      },
      currentQuestion < questions.length - 1 ? 2000 : 0
    );
  };

  const handleExitQuiz = () => {
    navigate("/");
  };

  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="absolute top-4 right-4">
        <button
          className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={handleExitQuiz}
        >
          Exit Quiz
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-4">Quiz</h1>
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        {currentQuestion < questions.length && (
          <>
            <LoadingBar progress={progress} color="#3182ce" height={3} />
            <div className="mb-4 text-lg font-medium">
              Question {currentQuestion + 1} out of {questions.length}
            </div>
            <h2 className="mb-4 text-xl font-semibold">
              {questions[currentQuestion].question}
            </h2>
            <p className="mb-2">Current Score: {score}</p>
            <ul>
              {questions[currentQuestion].options.map((option, index) => (
                <li key={index} className="mb-2">
                  <button
                    className={`w-full p-2 rounded ${
                      showAnswer
                        ? option === questions[currentQuestion].answer
                          ? "bg-green-200"
                          : "bg-red-200"
                        : "bg-blue-200 hover:bg-blue-300"
                    }`}
                    onClick={() => handleAnswerOptionClick(option)}
                    disabled={showAnswer}
                  >
                    {option}
                  </button>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
