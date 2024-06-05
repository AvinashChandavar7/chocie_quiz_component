import React from 'react'

interface ResultProps {
  score: number;
  total: number;
  onReset: () => void;
}

const Result: React.FC<ResultProps> = ({ score, total, onReset }) => {
  return (
    <div>
      <h2>Your Score : {score}/{total}</h2>
      <button onClick={onReset}>Attempt Again</button>
    </div>
  )
}

export default Result