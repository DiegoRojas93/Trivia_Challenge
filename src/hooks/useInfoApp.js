import { useState } from "react";

export const useInfoApp = () => {

  const [isBeginning, setIsBeginning] = useState(false)
  const [results, setResults] = useState([])

  const handleStart = () => setIsBeginning(true)
  const handleAgain = () => {
    setResults([])
    setIsBeginning(false)
  }

  return [ results, isBeginning, setResults, handleStart, handleAgain ]
}