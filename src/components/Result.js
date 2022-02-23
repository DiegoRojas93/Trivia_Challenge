import React from 'react';
import { htmlDecode } from '../utils/htmlDecode';

export const Result = ({ result }) => (
    <h3 className={
      result.respUser === result.correct_answer
        ? 'success'
        : 'fail'
    }>{`Q: ${ htmlDecode(result.question) }`}</h3>
)

