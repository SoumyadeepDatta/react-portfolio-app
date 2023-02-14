import React from "react";
import { Link } from "react-router-dom";

function Skills(props) {
  return (
    <div>
      <ul>
        {props.data[0].map((e, id) => (
          <li key={id}>{e}</li>
        ))}
      </ul>
      <ul>
        {props.data[1].map((e, id) => (
          <li key={id}><a href={e.url}>{e.name}</a></li>
        ))}
      </ul>
      <hr />
      <ul>
        {props.data[2].map((e, id) => (
          <li key={id}>
            <Link to={`/certifications/${e.id}`}>{e.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
