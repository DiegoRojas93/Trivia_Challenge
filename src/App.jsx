import React, { useState } from 'react';
import { Challenges } from './components/Challenges';
import { Intro } from './components/Intro';

export const App = () => {

  const [isBeginning, setIsBeginning] = useState(false)
  const [results, setResults] = useState({})


  const handleClick = () => setIsBeginning(true)

  return (
    <>
      {
        isBeginning
          ? <Challenges setResults={setResults}/>
          : <Intro handleClick={handleClick}/>
      }
    </>
  )
}
