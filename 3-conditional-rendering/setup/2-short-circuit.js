import React, { useState } from 'react'
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('')
  const [isError, setIsError] = useState(false)
  // const firstValue = text || 'hello world'
  // const secondValue = text && 'hello world'

  return (
    <>
      {/* <h1>{firstValue}</h1>
      <h1>Value:{secondValue}</h1> */}
      <h1>{text || 'kunal'}</h1>
      <button
        className='btn'
        onClick={() => {
          setIsError(!isError)
        }}
      >
        Toggle Error
      </button>
      <h1>{isError && 'Error...'}</h1>
      <h1>
        {isError ? (
          'there is an error...'
        ) : (
          <div>
            <h2>there is no error...</h2>
          </div>
        )}
      </h1>
    </>
  )
}

export default ShortCircuit
