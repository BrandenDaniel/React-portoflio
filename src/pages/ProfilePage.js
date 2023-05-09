import Nav from "../component/Nav";
import "../assets/sass/profile.scss";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div className="profile">
      <Nav />

      <div className="profile__content">
        <div className="profile__bio">
          <img
            src={require("../assets/images/profile-pic.jpg")}
            alt="Branden."
          />
          <h1>
            Hey there, I'm Branden! 👋
            <br />
            Let me share a little bit about myself.
          </h1>

          <p>
            I've been passionately immersed in the world of front-end
            development since early 2019. Over the years, I've had the
            incredible opportunity to work with both large corporations,
            crafting robust suites of in-house tools, and smaller creative
            digital agencies, pushing the boundaries of design and
            functionality.
          </p>
          <p>
            After taking a transformative break to explore an alternative career
            path, I realised that my true calling lies in developing intuitive
            web apps and websites. The thrill of bringing ideas to life through
            elegant code and creating seamless user experiences pulled me right
            back into the world I belong to.
          </p>
          <p>
            Curious to see the fruits of my labor? Check out my
            <Link to="/work"> recent work</Link> and prepare to be impressed! 🙌
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
