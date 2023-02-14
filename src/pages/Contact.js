import React from 'react'

function Contact(props) {
  return (
    <div>
      {JSON.stringify(props.data[0])}
      <hr />
      <ul>
        {props.data[1].map((e, id) => (
          <li key={id}><a href={e.url} target="_blank">{e.name}</a></li>
        ))}
      </ul>
    </div>
  )
}

export default Contact