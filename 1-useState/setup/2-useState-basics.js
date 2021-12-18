import React, { useState } from 'react'

const Names = ['Title1', 'Title2', 'Title3', 'Title4']

const UseStateBasics = () => {
  // const value = useState(1)[0]
  // const handler = useState(1)[1]
  // console.log(value, handler)
  const [text, setText] = useState('random title')
  const handleClick = () => {
    if (text === 'random title') {
      setText('hello world')
    } else {
      setText('random title')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className='btn' onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  )
}

export default UseStateBasics
