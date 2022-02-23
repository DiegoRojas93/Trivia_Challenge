import React from 'react';

export const Challenge = ({ data, handleClick, level }) => {

  const { loading, questions } = data;

  return (
    <>
      {
        !loading
          ? (
            <>
              <h1>{questions[level].category}</h1>
              <h2>{questions[level].question}</h2>
              <h3>{`Level ${level + 1}/10`}</h3>
              <div>
                <button onClick={() => handleClick('True')}>True</button>
                <button onClick={() => handleClick('False')}>False</button>
              </div>
            </>
          )
          : <h1>loading...</h1>
      }
    </>
  )
}
