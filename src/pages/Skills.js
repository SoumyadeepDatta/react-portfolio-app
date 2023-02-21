import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Skills(props) {
  return (
    <Container style={{paddingTop:"50px"}}>
      <Row style={{ marginTop: "50px",marginBottom: "50px" }}>
        <Col md={6}>
          <h1>Skills</h1>
          <ul>
            {props.data[0].map((e, id) => (
              <li key={id}>{e}</li>
            ))}
          </ul>
        </Col>
        <Col md={6}>
          <h1>Profiles</h1>
          <ul>
            {props.data[1].map((e, id) => (
              <li key={id}>
                <a href={e.url}>{e.name}</a>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <hr />
      <Row style={{ marginTop: "50px", paddingBottom: "50px" }}>
        <Col md={6}>
          <h1>Certifications</h1>
          <ul>
            {props.data[2].map((e, id) => (
              <li key={id}>
                <Link to={`/certifications/${e.id}`}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
