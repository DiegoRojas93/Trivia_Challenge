import React, { useState } from 'react';
import { Intro } from './components/Intro';

export const App = () => {

  const [isBeginning, setIsBeginning] = useState(false)

  const handleClick = () => setIsBeginning(true)

  return (
    <>
      {
        isBeginning
          ? <h1>Comenzar Pruebas</h1>
          : <Intro handleClick={handleClick}/>
      }
    </>
  )
}
