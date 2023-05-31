import "../assets/sass/components/nav.scss";
import { NavLink, Link } from "react-router-dom";
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
      document.querySelector(".nav").classList.add("nav--scroll-active");
    } else {
      document.querySelector(".nav").classList.remove("nav--scroll-active");
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
          <NavLink to="/profile" className="underline-hover">
            Profile
          </NavLink>
          {/* <NavLink to="/work" className="underline-hover">
            Work
          </NavLink> */}
          <span id="themeToggle">
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
