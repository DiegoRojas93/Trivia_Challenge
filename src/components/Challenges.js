import React, { useEffect, useState } from 'react';
import { getData } from '@utils/getData';

export const Challenges = () => {

  const [ data, setData] = useState({
    loading: true,
    data: []
  });

  const [level, setLevel] = useState(0)

  useEffect(() => {
    getData()
      .then( data => setData({
        loading: false,
        questions: data
      }));

  }, []);

  const handleClick = (result) => {
    setLevel(level + 1)
  }

  const { loading, questions } = data;


  return (
    <div className='question'>

      {
        !loading && (
          <>
            <h1>{questions[level].category}</h1>
            <h2>{questions[level].question}</h2>
            <h3>{`Level ${level + 1}/10`}</h3>
            <div>
              <button onClick={handleClick}>True</button>
              <button onClick={handleClick}>False</button>
            </div>
          </>
        )
      }

    </div>
  )
}
