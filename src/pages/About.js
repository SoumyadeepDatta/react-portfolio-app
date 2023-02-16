import React, { useContext } from "react";
import ThemeContext from "../ThemeContext";

function About(props) {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <p>Background is {theme}</p>
      <img src={props.data.img} alt="" />
      <h1>Hi I'm {props.data.name}</h1>
      <p>{props.data.objective}</p>
    </div>
  );
}

export default About;
