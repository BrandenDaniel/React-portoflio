import "../assets/sass/nav.scss";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__links">
        <Link className="nav__logo" to="/">
          BN<span>.</span>
        </Link>

        <div>
          <Link to="/profile">Profile</Link>
          <Link to="/work">Work</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
