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
        <Navbar.Brand>{props.data[0]}</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Turn on:{" "}
            <button onClick={() => toggleTheme(darkMode)}>
              {!darkMode ? "dark" : "light"} mode
            </button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
