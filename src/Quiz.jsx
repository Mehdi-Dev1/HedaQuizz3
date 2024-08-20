import React, { useState, useEffect } from 'react';

const questionsData = [
  
];

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState(new Set());
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  useEffect(() => {
    const shuffledQuestions = [...questionsData].sort(() => Math.random() - 0.5);
    setQuestions(shuffledQuestions);
  }, []);

  const handleAnswer = (selectedOption) => {
    setSelectedAnswer(selectedOption);
    const currentQuestion = questions[currentQuestionIndex];
    const correct = selectedOption === currentQuestion.answer;
    setIsCorrect(correct);

    if (correct) {
      setCorrectAnswers(new Set(correctAnswers).add(currentQuestion.id));
      if (incorrectAnswers.includes(currentQuestion.id)) {
        setIncorrectAnswers(incorrectAnswers.filter(id => id !== currentQuestion.id));
      }
    } else {
      if (!incorrectAnswers.includes(currentQuestion.id)) {
        setIncorrectAnswers([...incorrectAnswers, currentQuestion.id]);
      }
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      moveToNextQuestion();
    }, 1000); // Attendre 3 secondes avant de passer à la question suivante
  };

  const moveToNextQuestion = () => {
    let nextIndex = currentQuestionIndex + 1;
    if (nextIndex >= questions.length) {
      nextIndex = 0;
    }
    setCurrentQuestionIndex(nextIndex);
  };

  useEffect(() => {
    if (incorrectAnswers.length > 0 && currentQuestionIndex >= questions.length - 1) {
      const nextQuestions = questions.filter(q => incorrectAnswers.includes(q.id));
      setQuestions([...questions, ...nextQuestions]);
    }
  }, [currentQuestionIndex]);

  if (questions.length === 0) return <div>Loading...</div>;

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">{currentQuestion.question}</h2>
        <div className="space-y-2">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === option;
            const buttonColor = isSelected
              ? isCorrect
                ? 'bg-green-500'
                : 'bg-red-500'
              : 'bg-blue-500';

            return (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null} // Désactiver les boutons après une sélection
                className={`block w-full p-2 text-white rounded-lg ${buttonColor} ${
                  selectedAnswer === null ? 'hover:bg-blue-600' : ''
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
