import React from 'react';
import { QuizQuestion } from '../types/types';

interface QuestionProps {
  data: QuizQuestion;
  selectedAnswer: string | null;
  onOptionChange: (option: string) => void;
}

const Question: React.FC<QuestionProps> = ({ data, onOptionChange, selectedAnswer }) => {
  return (
    <div>
      <h1 className='question'>{data.question}</h1>

      {
        ['a', 'b', 'c', 'd'].map(option => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              checked={selectedAnswer === option}
              onChange={() => onOptionChange(option)}
            />
            {data[option as keyof QuizQuestion]}
          </label>
        ))
      }

    </div>
  )
}

export default Question