import "../assets/sass/components/nav.scss";
import Socials from "./Socials";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";

function Nav() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light" : "dark"));

    document.querySelector("body").setAttribute("data-theme", theme);

    if (theme === "dark") {
      document.getElementById("root").classList.add("gradient-animation");
    } else {
      document.getElementById("root").classList.remove("gradient-animation");
    }
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 55 ||
      document.documentElement.scrollTop > 55
    ) {
      document.querySelector(".nav").classList.add("nav--scroll-active");
    } else {
      document.querySelector(".nav").classList.remove("nav--scroll-active");
    }
  };
  window.onscroll = function () {
    scrollFunction();
  };

  return (
    <nav className="nav">
      <div className="nav__links">
        <NavLink className="nav__logo" to="/">
          BN<span>.</span>
        </NavLink>

        <div>
          <Socials />
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/work">Work</NavLink>
          <span id="themeToggle">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "light"}
            />
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
