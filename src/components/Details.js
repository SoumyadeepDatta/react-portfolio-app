import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function Details(props) {
  const { id } = useParams();
  const data = props.data.find((e) => e.id === Number(id));
  return (
    <Container style={{paddingTop:"50px", marginTop:"50px"}}>
      {props.type === "work" && (
        <Container >
          <Link to="/works" >Back</Link>
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
      {props.type === "tech" && (
        <Container>
          <Link to="/skills">Back</Link>
          <Container style={{ marginTop: "50px", paddingBottom: "50px" }}>
            <h1>{data.name}</h1>
            <p>
              <u>Verification ID:</u> {data.verification_id}
              <br />
              {data.url && (
                <>
                  <u>URL:</u> <a href={data.url}>Click Here</a>
                </>
              )}
            </p>
            <Container>
              <Image
                src={data.img}
                style={{
                  width: "80%",
                  height: "auto",
                }}
              />
            </Container>
          </Container>
        </Container>
      )}
    </Container>
  );
}

export default Details;
