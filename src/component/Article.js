import React from 'react'
import Person from './Person'

const Article = () => {
    let persons=[...Array(10)]
  return (
    <div className='article'>
        {persons.map((el)=>(<Person/>))}
        </div>
  )
}

export default Article