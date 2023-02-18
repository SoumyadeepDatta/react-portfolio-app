import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function About(props) {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div>
      <p>You are using {darkMode ? "dark" : "light"} mode</p>
      <img src={props.data.img} alt="" />
      <h1>Hi I'm {props.data.name}</h1>
      <p>{props.data.objective}</p>
    </div>
  );
}

export default About;
