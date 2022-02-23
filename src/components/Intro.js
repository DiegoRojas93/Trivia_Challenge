import propTypes from 'prop-types'
import React from 'react'

export const Intro = ({ handleStart }) => {
  return (
    <div className="intro">
      <h1>Welcome to TriviaChallenge!</h1>
      <h2>You'll be presented with 10 True or False questions</h2>
      <h3>Can you score 100%?</h3>

      <button onClick={ handleStart }>Begin</button>
    </div>
  )
}

Intro.propTypes = {
  handleStart: propTypes.func.isRequired
}