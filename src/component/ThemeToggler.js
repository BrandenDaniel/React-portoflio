import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "../assets/sass/nav.scss";

function ThemeToggler() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));

    document.querySelector("body").setAttribute("data-theme", theme);
  };

  return (
    <span id="themeToggle">
      <FontAwesomeIcon icon={faMoon} />
      <span className="material-symbols-outlined">light_mode</span>
      <input
        type="checkbox"
        onChange={toggleTheme}
        checked={theme === "light"}
      />
    </span>
  );
}

export default ThemeToggler;
