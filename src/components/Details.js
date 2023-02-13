import React from "react";
import { useParams } from "react-router-dom";

function Details(props) {
  const { id } = useParams();
  const data = props.data.find((e) => e.id === Number(id));
  return (
    <div>
      {data.name}
      {data.type === "work" && (
        <div>
          <h1>{data.type}</h1>
          {JSON.stringify(data)}
        </div>
      )}
      {data.type === "tech" && (
        <div>
          <h1>{data.type}</h1>
          {JSON.stringify(data)}
        </div>
      )}
    </div>
  );
}

export default Details;
