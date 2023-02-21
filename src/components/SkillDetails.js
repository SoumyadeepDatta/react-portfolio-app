import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

function SkillDetails(props) {
  const { id } = useParams();
  const data = props.data.find((e) => e.id === Number(id));
  return (
    <Container style={{ paddingTop: "50px", marginTop: "50px" }}>
      <Container>
        <Link to="/skills">Back</Link>
        <Container style={{ marginTop: "50px", paddingBottom: "50px" }}>
          <h1>{data.name}</h1>
          <p>
            <u>Verification ID:</u> {data.verification_id}
            <br />
            {data.url && (
              <>
                <u>URL:</u> <a href={data.url} target="_blank">Click Here</a>
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
    </Container>
  );
}

export default SkillDetails;
