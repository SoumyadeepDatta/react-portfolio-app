import React from 'react'

function Contact(props) {
  return (
    <div>
      {JSON.stringify(props.data[0])}
      <hr />
      {JSON.stringify(props.data[1])}
    </div>
  )
}

export default Contact