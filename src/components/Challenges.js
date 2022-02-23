import React, { useCallback, useState } from 'react';
import { Challenge } from './Challenge';


export const Challenges = ({ data, setResults, results, handleAgain }) => {

  const [level, setLevel] = useState(0)

  const handleClick = (result) => {
    setResults( r => [ ...r, { ...questions[ level ], respUser: result } ] )
    setLevel(level + 1)
  }


  const { questions } = data;

  // let numResults = results.map( r => {
  //   if (r.respUser === false) continue
  //   if (r.respUser === true) return true
  // })

  // console.log(numResults.length);

  return (
    <div className='question'>

      {
        level <= 9
          ? <Challenge data={data} handleClick={handleClick} level={level} />
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
