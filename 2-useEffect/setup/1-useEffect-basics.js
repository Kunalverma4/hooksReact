import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call useEffect()')
    if (value >= 1) {
      document.title = `React app |New Message(${value})`
    }
  }, [value])

  useEffect(() => {
    console.log('hello world')
    if (value > 0) {
      document.querySelector('.btn').innerHTML = '+1'
    } else {
      document.querySelector('.btn').innerHTML = 'ClickMe'
    }
  }, [value])

  console.log('render component')
  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
      <button className='btn' onClick={() => setValue(0)}>
        Reset
      </button>
    </>
  )
}

export default UseEffectBasics
