import React from 'react'

function About(props) {
  return (
    <div>
      <img src={props.data.img} alt="" />
      <h1>Hi I'm {props.data.name}</h1>
      <p>{props.data.objective}</p>
    </div>
  )
}

export default About