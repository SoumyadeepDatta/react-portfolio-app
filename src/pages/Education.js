import React from "react";
import { Container } from "react-bootstrap";

function Education(props) {
  return (
    <Container style={{ marginTop: "50px", paddingBottom: "50px" }}>
      <h1 style={{paddingTop:"50px"}}>Education</h1>
      <ul>
        {props.data.map((e, id) => (
          <li key={id}>
            <h2>
              {e.degree} ({e.start} - {e.end})
            </h2>
            <p>
              {e.organization} <br /> {e.board} : {e.score} {e.score_unit}{" "}
            </p>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Education;
