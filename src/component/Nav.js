import "../assets/sass/nav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

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
        </div>
      </div>
    </div>
  );
}

export default Nav;
