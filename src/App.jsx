import React, { useEffect, useState } from 'react';
import { Challenges } from './components/Challenges';
import { Intro } from './components/Intro';

import { getData } from '@utils/getData';

export const App = () => {

  const [isBeginning, setIsBeginning] = useState(false)
  const [results, setResults] = useState([])

  const [ data, setData] = useState({
    loading: true,
    questions: []
  });

  useEffect(() => {
    getData()
      .then( data => setData({
        loading: false,
        questions: data
      }));
  }, []);

  const handleStart = () => setIsBeginning(true)
  const handleAgain = () => setIsBeginning()

  return (
    <>
      {
        isBeginning
          ? <Challenges data={data} setResults={setResults} results={results} handleAgain={handleAgain}/>
          : <Intro handleStart={handleStart}/>
      }
    </>
  )
}
