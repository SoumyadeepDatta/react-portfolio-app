import { createContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    toggleThemeValue(localStorage.getItem("theme")) || "light"
  );

  function toggleThemeValue(theme) {
    return theme === "light" ? "dark" : "light";
  }

  function toggleTheme(themeValue) {
    setTheme(toggleThemeValue(themeValue));
    localStorage.setItem("theme", theme);
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, toggleThemeValue }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
