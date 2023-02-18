import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Navbar(props) {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      {props.data[0]}
      <br />
      Go to{" "}
      <button onClick={() => toggleTheme()}>
        Turn on {darkMode ? "light" : "dark"} mode
      </button>
    </div>
  );
}

export default Navbar;
