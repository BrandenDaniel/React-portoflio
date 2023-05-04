import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "../assets/sass/nav.scss";

function ThemeToggler() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
    console.log(theme);
  };

  return (
    <span id="themeToggle">
      <FontAwesomeIcon icon={faMoon} />
      <span className="material-symbols-outlined">light_mode</span>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "dark"}
      />
    </span>
  );
}

export default ThemeToggler;
