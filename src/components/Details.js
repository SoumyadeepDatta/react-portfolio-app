import React from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Details(props) {
  const { id } = useParams();
  const data = props.data.find((e) => e.id === Number(id));
  return (
    <Container>
      {data.type === "work" && (
        <Container>
          <Link to="/works">Back</Link>
          <Container style={{ marginTop: "50px", paddingBottom: "50px" }}>
            <h1>{data.name}</h1>
            <p>
              Source:{" "}
              <a href={data.source_url} target="_blank">
                Click Here
              </a>
              <br />
              Demo:{" "}
              <a href={data.demo_url} target="_blank">
                Click Here
              </a>
            </p>
            <p style={{ textAlign: "justify" }}>{data.description}</p>
          </Container>
        </Container>
      )}
      {data.type === "tech" && (
        <Container>
          <Link to="/skills">Back</Link>
          {/* <h1>{data.type}</h1> */}
          {JSON.stringify(data)}
        </Container>
      )}
    </Container>
  );
}

export default Details;
