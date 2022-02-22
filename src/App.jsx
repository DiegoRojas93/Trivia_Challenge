import React, { useEffect } from 'react';
import { getData } from './utils/getData';

export const App = () => {

  useEffect(() => {
    getData()
      .then(console.log)
  }, [])

  return (
    <>
      <h1>Hello World!!!</h1>
    </>
  )
}
