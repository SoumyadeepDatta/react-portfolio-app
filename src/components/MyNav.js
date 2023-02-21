import React, { useContext } from "react";
import { Container, Navbar } from "react-bootstrap";
import ThemeContext from "../contexts/ThemeContext";

function MyNav(props) {
  const { darkMode, toggleTheme, themeStyle } = useContext(ThemeContext);
  return (
    <Navbar
      variant={darkMode ? "dark" : "light"}
      bg={darkMode ? "dark" : "light"}
      fixed="top"
    >
      <Container>
        <Navbar.Brand onClick={props.data.handleShow}>
          {props.data.name}
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <button
              onClick={() => toggleTheme(darkMode)}
              style={{
                borderRadius: "50%",
                height: "20px",
                width: "20px",
                background: themeStyle(!darkMode).background,
                margin: "5px",
                border: "none",
                boxShadow: `0 0 15px ${themeStyle(!darkMode).background}`,
              }}
            ></button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;
