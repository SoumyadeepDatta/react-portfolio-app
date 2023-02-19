import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyCard from "../components/MyCard";

function Works(props) {
  return (
    <Container>
      <Row style={{justifyContent:"space-between"}}>
        {props.data.map((e, id) => (
          <Col md="auto" key={id} className="mr-auto">
            <MyCard data={e} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Works;
