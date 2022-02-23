import React from 'react'

export const Result = ({ result }) => (
    <h3 className={
      result.respUser === result.correct_answer
        ? 'success'
        : 'fail'
    }>{`Q: ${ result.question }`}</h3>
)

