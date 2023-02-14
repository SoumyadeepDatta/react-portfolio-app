import React from "react";

function Education(props) {
  return (
    <div>
      <ul>
        {props.data.map((e, id) => (
          <li key={id}>
            <h1>{e.degree}</h1>
            <p>{JSON.stringify(e)}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
