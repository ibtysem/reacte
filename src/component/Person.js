import React from 'react'

function Person() {
    const person ={
        name:"nancy",
        bio:"artiste",
        img:"https://www.egypttoday.com/siteimages/Larg/202009180324292429.jpg"
    }
  return (
    <div className='crd'>
        <img src={person.img}/>
        <h3>{person.name}
        </h3>
        <p>
            {person.bio}
        </p>
    </div>
  )
}

export default Person