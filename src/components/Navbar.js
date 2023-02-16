import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Navbar(props) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      {props.data[0]}
      <br />
      <button onClick={() => toggleTheme(theme)}>{theme}</button>
    </div>
  );
}

export default Navbar;
