import React from "react";
import { Link } from "react-router-dom";

function Works(props) {
  return (
    <div>
      <ul>
        {props.data.map((e, id) => (
          <li key={id}>
            <Link to={`works/${e.id}`}>{e.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Works;
