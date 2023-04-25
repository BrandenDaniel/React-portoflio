import "../assets/sass/nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function initialMode() {
  return true;
}

function Nav() {
  const setDarkTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };

  const setLightTheme = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };

  const toggleTheme = (e) => {
    if (e.target.checked) {
      return setDarkTheme();
    } else {
      return setLightTheme();
    }
  };

  let [mode, setMode] = useState(() => initialMode());

  function modeToggle() {
    setMode(() => {
      mode = !mode;
    });

    console.log(mode);

    if (mode === true) {
      return document.querySelector("body").setAttribute("data-theme", "dark");
    } else if (mode === false) {
      return document.querySelector("body").setAttribute("data-theme", "light");
    }
  }

  return (
    <div className="nav">
      <div className="nav__links">
        <Link className="nav__logo" to="/">
          Branden Ng
        </Link>

        <div>
          <Link to="/profile">Profile</Link>
          <Link to="/work">Work</Link>
          <span id="themeToggle">
            <FontAwesomeIcon icon={faMoon} />
            <span className="material-symbols-outlined">light_mode</span>
            <input type="checkbox" onChange={toggleTheme} />
          </span>
          <button onClick={modeToggle}></button>
        </div>
      </div>
    </div>
  );
}

export default Nav;
