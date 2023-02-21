import React from "react";
import { Spinner } from "react-bootstrap";

function MySpinner(props) {
  return (
    <Spinner
      animation="grow"
      variant={props.dark ? "light" : "dark"}
      size="lg"
      style={{
        display: "block",
        position: "absolute",
        top: "50%",
        left: "50%",
      }}
    />
  );
}

export default MySpinner;
