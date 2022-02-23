import React, { useState } from 'react';


export const Challenges = ({ data, setResults, results, handleAgain }) => {

  const [level, setLevel] = useState(0)

  const handleClick = (result) => {
    setResults( r => [ ...r, { ...questions[ level ], respUser: result } ] )
    setLevel(level + 1)
  }

  const { loading, questions } = data;

  return (
    <div className='question'>

      {
        !loading && level <= 9
          ? (
              <>
                <h1>{questions[level].category}</h1>
                <h2>{questions[level].question}</h2>
                <h3>{`Level ${level + 1}/10`}</h3>
                <div>
                  <button onClick={() => handleClick(true)}>True</button>
                  <button onClick={() => handleClick(false)}>False</button>
                </div>
              </>
            )
          : (
              <>
                <h1>You Score</h1>
                <h2>{`${'ggg'}/10`}</h2>
                
                <button onClick={ handleAgain }>Play Again</button>
              </>
          )
      }

    </div>
  )
}
