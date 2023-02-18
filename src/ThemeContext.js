import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") || false
  );

  function toggleTheme() {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", darkMode);
  }
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
