import "../assets/sass/nav.scss";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Nav() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));

    document.querySelector("body").setAttribute("data-theme", theme);
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 55 ||
      document.documentElement.scrollTop > 55
    ) {
      document.querySelector(".nav").classList.add("nav--scroll");
    } else {
      document.querySelector(".nav").classList.remove("nav--scroll");
    }
  };
  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <div className="nav">
      <div className="nav__links">
        <Link className="nav__logo underline-hover" to="/">
          BN<span>.</span>
        </Link>

        <div>
          <Link to="/profile" className="underline-hover">
            Profile
          </Link>
          <Link to="/work" className="underline-hover">
            Work
          </Link>
          <span id="themeToggle">
            <FontAwesomeIcon icon={faMoon} />
            <span className="material-symbols-outlined">light_mode</span>
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "light"}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Nav;
