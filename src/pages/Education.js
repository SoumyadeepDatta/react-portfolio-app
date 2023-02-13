import React from "react";

function Education(props) {
  return (
    <div>
      <ul>
        {props.data.map((e, id) => (
          <li key={id}>{e.degree}</li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
