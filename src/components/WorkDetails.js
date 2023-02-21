import React from "react";
import { Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function WorkDetails(props) {
  const { id } = useParams();
  const data = props.data.find((e) => e.id === Number(id));
  return (
    <Container style={{ paddingTop: "50px", marginTop: "50px" }}>
      <Container>
        <Link to="/works">Back</Link>
        <Container style={{ marginTop: "50px", paddingBottom: "50px" }}>
          <h1>{data.name}</h1>
          <p>
            Source: <a href={data.source_url}>Click Here</a>
            <br />
            Demo: <a href={data.demo_url}>Click Here</a>
          </p>
          <p style={{ textAlign: "justify" }}>{data.description}</p>
        </Container>
      </Container>
    </Container>
  );
}

export default WorkDetails;
