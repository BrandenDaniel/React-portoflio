import "../assets/sass/profile.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import CV from "../assets/docs/CV.pdf";

function ProfilePage() {
  return (
    <div className="profile">
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

        <div className="profile__footer">
          <div class="profile__experience">
            <h2>Experience</h2>

            <div class="profile__experience__body">
              <div>
                <h3>
                  SafeCode <span>[2022 - present]</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus dolores aut sunt perferendis quo tenetur
                  praesentium sed modi culpa optio.
                </p>
              </div>

              <div>
                <h3>
                  Arcadian Digital <span>[2019 - 2020]</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus dolores aut sunt perferendis quo tenetur
                  praesentium sed modi culpa optio.
                </p>
              </div>

              <div>
                <h3>
                  Bebble <span>[2018 - 2019]</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellendus dolores aut sunt perferendis quo tenetur
                  praesentium sed modi culpa optio.
                </p>
              </div>
            </div>
          </div>

          <div className="profile__stack">
            <h2>Current tech stack</h2>
            <div className="profile__stack__legend">
              <span>Competent</span>
              <span>Moderate</span>
              <span>Novice/Early stages</span>
            </div>
            <div className="profile__stack__items">
              <span class="competent">HTML</span>
              <span class="competent">jQuery</span>
              <span class="competent">CSS</span>
              <span class="competent">Sass</span>
              <span class="moderate">React</span>
              <span class="moderate">JavaScript</span>
              <span class="novice">TypeScript</span>
              <span class="novice">Redux</span>
            </div>
            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="arrow-hover"
            >
              Download my resume <FontAwesomeIcon icon={faArrowRightLong} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
