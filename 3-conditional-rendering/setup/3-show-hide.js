import React, { useState, useEffect } from 'react'

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        Show/hide
      </button>
      {show && <Item />}
    </>
  )
}
const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {
      window.removeEventListener('resize', checkSize)
    }
  }, [])
  return (
    <>
      <h1>Window</h1>
      <h1>Size:{size} px</h1>
    </>
  )
}

export default ShowHide
