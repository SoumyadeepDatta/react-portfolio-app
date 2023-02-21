import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ThemeContext from "../contexts/ThemeContext";

function MyCard(props) {
  const { darkMode } = useContext(ThemeContext);
  const e = props.data;
  return (
    <Card
      bg={darkMode ? "dark" : "light"}
      style={{
        width: "18rem",
        height: "20rem",
        marginBottom: "50px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <hr />
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
