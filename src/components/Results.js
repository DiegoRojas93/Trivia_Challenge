import React from 'react';
import { Result } from './Result';

export const Results = ({ results, handleAgain }) => {

  const numResults = results.filter( r => {
    if (r.respUser === r.correct_answer ) return true
  })

  return (
    <>
      <h1>You Score</h1>
      <h2>{`${numResults.length}/10`}</h2>
      <ol>
        {
          results.map( r => <li key={ r.question }> <Result result={r} /> </li> )
        }
      </ol>
      <button onClick={ handleAgain }>Play Again</button>
    </>
  )
}
