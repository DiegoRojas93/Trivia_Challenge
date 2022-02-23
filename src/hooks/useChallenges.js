import { useEffect, useState } from "react";
import { getData } from '@utils/getData';

export const useChallenges = ( setResults ) => {

  const [level, setLevel] = useState(0)

  const [ data, setData] = useState({
    loading: true,
    questions: []
  });

  const { questions } = data;

  useEffect(() => {
    getData()
      .then( data => setData({
        loading: false,
        questions: data
      }));
  }, []);


  const handleClick = (result) => {
    setResults( r => [ ...r, { ...questions[ level ], respUser: result } ] )
    setLevel(level + 1)
  }

  return [ data, level, handleClick ]
}