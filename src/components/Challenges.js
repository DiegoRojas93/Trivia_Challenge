import React from 'react';

import { Challenge } from '@components/Challenge';
import { Results } from '@components/Results';

import { useChallenges } from '@hooks/useChallenges';


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
