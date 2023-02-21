import React, { useContext } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import ThemeContext from "../contexts/ThemeContext";

const colStyle = {
  marginTop: "50px",
  marginLeft: "auto",
  marginRight: "auto",
  alignSelf: "center",
};

function About(props) {
  const { darkMode, themeStyle } = useContext(ThemeContext);
  return (
    <Container style={{paddingTop:"50px"}}>
      <Row>
        <Col md={4} style={colStyle}>
          <Image
            src={props.data.img}
            style={{
              width: "80%",
              height: "auto",
              boxShadow: `0 0 2px ${themeStyle(!darkMode).background}`,
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
