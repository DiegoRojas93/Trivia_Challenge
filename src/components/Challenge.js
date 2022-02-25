import React from 'react';

import { htmlDecode } from '../utils/htmlDecode';


export const Challenge = ({ data, handleClick, level }) => {

  const { loading, questions } = data;

  return (
    <div className='challenges'>
      {
        !loading
          ? (
            <>
              <h1>{ questions[level].category }</h1>
              <h2>{ htmlDecode( questions[level].question ) }</h2>
              <div className='buttons'>
                <button onClick={() => handleClick('True')}>True</button>
                <button onClick={() => handleClick('False')}>False</button>
              </div>
              <h3>{`Level ${ level + 1 }/10`}</h3>
            </>
          )
          : <h1>loading...</h1>
      }
    </div>
  )
}
