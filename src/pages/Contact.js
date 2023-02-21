import React from "react";
import { Container } from "react-bootstrap";

function Contact(props) {
  return (
    <Container style={{ marginTop: "50px", paddingBottom: "50px" }}>
      <h1 style={{paddingTop:"50px"}}>Personal Details</h1>
      <ul>
        <li>
          <u>Address:</u> {props.data[0].address}
        </li>
        <li>
          <u>Languages Known:</u> {props.data[0].languages.join(", ")}
        </li>
        <li>
          <u>Date of Birth:</u> {(new Date(props.data[0].dob).toString())}
        </li>
        <li>
          <u>Nationality:</u> {props.data[0].nationality}
        </li>
        <li>
          <u>Phone:</u> {props.data[0].phone}
        </li>
        <li><a href="">Download Resume</a></li>
      </ul>

      <hr style={{marginTop:"50px",marginBottom:"50px"}}/>
      <h1>Connect</h1>
      <ul>
        {props.data[1].map((e, id) => (
          <li key={id}>
            <a href={e.url} target="_blank">
              {e.name}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Contact;
