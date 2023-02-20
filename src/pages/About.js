import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";

const colStyle = {
  marginTop: "50px",
  marginLeft: "auto",
  marginRight: "auto",
  alignSelf: "center",
};

function About(props) {
  return (
    <Container style={{height:"100vh"}}>
      <Row>
        <Col md={4} style={colStyle}>
          <Image
            src={props.data.img}
            style={{
              width: "80%",
              height: "auto",
            }}
            thumbnail="true"
          />
        </Col>
        <Col md={(8, { order: "first" })} style={colStyle}>
          <h1>
            Hi I'm <strong>{props.data.name}</strong>
          </h1>
          <p style={{ textAlign: "justify" }}>{props.data.objective}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
