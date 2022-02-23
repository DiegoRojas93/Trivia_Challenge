import React from 'react';
import { useChallenges } from '../hooks/useChallenges';
import { Challenge } from './Challenge';
import { Results } from './Results';



export const Challenges = ({ setResults, results, handleAgain }) => {

  const [ data, level, handleClick ] = useChallenges( setResults )

  return (
    <div className='question'>

      {
        level <= 9
          ? <Challenge data={data} handleClick={handleClick} level={level} />
          : <Results results={results} handleAgain={handleAgain} />
      }

    </div>
  )
}
