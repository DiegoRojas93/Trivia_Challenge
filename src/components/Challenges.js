import React, { useEffect, useState } from 'react';
import { getData } from '@utils/getData';

export const Challenges = () => {
  useEffect(() => {

    getData()
      .then(console.log)
  }, [])

  return (
    <div>Challenges</div>
  )
}
