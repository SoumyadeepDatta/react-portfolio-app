import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import ThemeContext from "../contexts/ThemeContext";

function Sidebar(props) {
  const { darkMode, themeStyle } = useContext(ThemeContext);
  return (
    <Offcanvas
      show={props.data.show}
      onHide={props.data.handleClose}
      scroll="true"
      backDrop="true"
    >
      <Offcanvas.Header
        closeButton
        closeVariant={!darkMode ? "black" : "white"}
        style={themeStyle(darkMode)}
      >
        <Offcanvas.Title style={themeStyle(darkMode)}>Navigate</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body style={themeStyle(darkMode)}>
        <ul>
          <li>
            <Link to="/">About Me</Link>
          </li>
          <li>
            <Link to="/education">My Education</Link>
          </li>
          <li>
            <Link to="/skills">My Skills</Link>
          </li>
          <li>
            <Link to="/works">My Works</Link>
          </li>
          <li>
            <Link to="/contact">Contact Me</Link>
          </li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
  );
}

export default Sidebar;
