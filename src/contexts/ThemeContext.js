import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  function toggleTheme(value) {
    setDarkMode(!value);
    // console.log(`now dark mode value is ${!value}`);
    localStorage.setItem("darkMode", !value);
  }

  function themeStyle(dark) {
    return ({
      background: dark ? "#212529" : "white",
      color: dark ? "white" : "black",
    });
  }

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme, themeStyle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
