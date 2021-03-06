import React from 'react'
import { data } from '../../../data'

const UseStateArray = () => {
  const [people, setpeople] = React.useState(data)
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setpeople(newPeople)
  }
  return (
    <>
      {people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className='item'>
            <h3>{name}</h3>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      <button className='btn' onClick={() => setpeople([])}>
        clear Items
      </button>
    </>
  )
}

export default UseStateArray
