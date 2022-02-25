import React from 'react';

import { Challenges } from '@components/Challenges';
import { Intro } from '@components/Intro';

import { useInfoApp } from '@hooks/useInfoApp';


export const App = () => {

  const [ results, isBeginning, setResults, handleStart, handleAgain ] = useInfoApp()

  return (
    <>
      {
        isBeginning
          ? <Challenges results={results} setResults={setResults} handleAgain={handleAgain} />
          : <Intro handleStart={handleStart}/>
      }
    </>
  )
}
