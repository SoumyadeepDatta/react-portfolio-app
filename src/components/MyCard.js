import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";

function MyCard(props) {
  const e = props.data;
  return (
    <Card
      style={{
        width: "20rem",
        height: "18rem",
        marginTop: "50px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <hr />
        {/* <Card.Subtitle
          className="mb-2 text-muted"
          style={{ textAlign: "justify" }}
        >
          {e.description}
        </Card.Subtitle> */}
        <Card.Text style={{ textAlign: "justify" }}>{e.description}</Card.Text>
        <Link
          to={`works/${e.id}`}
          style={{ position: "absolute", bottom: "20px" }}
        >
          Show More
        </Link>
      </Card.Body>
    </Card>
  );
}

export default MyCard;
