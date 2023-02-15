import React from "react";
import { Link, useParams } from "react-router-dom";

function Details(props) {
  const { id } = useParams();
  const data = props.data.find((e) => e.id === Number(id));
  return (
    <div>
      {data.name}
      {data.type === "work" && (
        <div>
          <Link to="/works">Back</Link>
          <h1>{data.type}</h1>
          {JSON.stringify(data)}
        </div>
      )}
      {data.type === "tech" && (
        <div>
          <Link to="/skills">Back</Link>
          <h1>{data.type}</h1>
          {JSON.stringify(data)}
        </div>
      )}
    </div>
  );
}

export default Details;
