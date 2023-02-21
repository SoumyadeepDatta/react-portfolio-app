import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyCard from "../components/MyCard";

function Works(props) {
  return (
    <Container style={{marginTop: "50px"}}>
      <h1 style={{paddingTop:"50px"}}>My Works</h1>
      <Row
        style={{
          justifyContent: "space-between",
          marginTop: "50px"
        }}
      >
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
