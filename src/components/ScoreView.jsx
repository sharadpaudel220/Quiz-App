import React from 'react'
import "./ScoreView.css";

const ScoreView = ({handleResetClick, score}) => {
  return (
    <div>
        <p>You Scored {score} out 5</p>
        <button onClick={handleResetClick}>reset</button>
    </div>
  )
}

export default ScoreView