import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import ThemeContext from "../contexts/ThemeContext";

function MyNav(props) {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <Navbar
      variant={darkMode ? "dark" : "light"}
      bg={darkMode ? "dark" : "light"}
    >
      <Container>
        <Navbar.Brand onClick={props.data.handleShow}>{props.data.name}</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {/* Turn on:{" "} */}
            <button
              onClick={() => toggleTheme(darkMode)}
              style={{
                borderRadius: "50%",
                height: "20px",
                width: "20px",
                background: darkMode ? "white" : "#212529",
                margin: "5px",
              }}
            >
              {/* {!darkMode ? "C" : "*"} */}
            </button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
