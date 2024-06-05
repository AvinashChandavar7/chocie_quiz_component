import React, { useEffect, useState } from 'react'
import Result from './Result';
import Question from './Question';
import { quizData } from '../data/quizData';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);

  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(false);

  const [attempts, setAttempts] = useState<number>(0);
  const [showError, setShowError] = useState<boolean>(false);


  const handleOptionChange = (option: string) => setSelectedAnswer(option);


  const handleSubmit = () => {
    if (selectedAnswer === quizData[currentQuestion].correct) {
      setScore((prevScore) => prevScore + 1)
    }

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer('')
    } else {
      setShowResults(true);
      setSelectedAnswer('');
    }
  }

  const handleReset = () => {
    setAttempts(attempts + 1);
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer('');
    setShowResults(false);
    setShowError(attempts >= 2);
  };

  useEffect(() => {
    if (attempts >= 3) {
      setShowResults(true);
      setShowError(true);
    }
  }, [attempts]);


  return (
    <div className='quiz__container'>
      {
        showResults ? (
          <>
            {showError ? <h1>Maximum 3 attempts reached. Please try again later.</h1> : null}

            <Result score={score} total={quizData.length} onReset={handleReset} />
          </>
        ) : (
          <div className='quiz__container--main'>
            <Question
              data={quizData[currentQuestion]}
              onOptionChange={handleOptionChange}
              selectedAnswer={selectedAnswer}
            />

            <button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
            >
              Submit
            </button>


          </div>
        )
      }
    </div>
  )
}

export default Quiz