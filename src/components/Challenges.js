import React from 'react';

import { Challenge } from './Challenge';
import { Results } from './Results';

import { useChallenges } from '../hooks/useChallenges';


export const Challenges = ({ setResults, results, handleAgain }) => {

  const [ data, level, handleClick ] = useChallenges( setResults )

  return (
    <>

      {
        level <= 9
          ? <Challenge data={data} handleClick={handleClick} level={level} />
          : <Results results={results} handleAgain={handleAgain} />
      }

    </>
  )
}
