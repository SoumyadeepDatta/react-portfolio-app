import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function Navbar(props) {
  const { theme, toggleTheme, toggleThemeValue } = useContext(ThemeContext);
  return (
    <div>
      {props.data[0]}
      <br />
      Go to <button onClick={() => toggleTheme(theme)}>
        {toggleThemeValue(theme)}
      </button>
    </div>
  );
}

export default Navbar;
