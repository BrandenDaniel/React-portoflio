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
          <h1>My developer journey.</h1>

          <p>
            I've been passionately immersed in the world of front-end
            development since early 2019. Over the years, I've had the
            incredible opportunity to work with both large corporations,
            crafting robust suites of in-house tools, and smaller creative
            digital agencies.
          </p>

          <p>
            I specialise in CSS, and I absolutely love it. The process of
            transforming intricate designs into stylesheets keeps me up at
            night. I enjoy tackling complicated layouts and seamlessly bring a
            web designer's vision to life.
          </p>

          <p>
            After taking a transformative break to explore an alternative career
            path, I realised that my true calling lies in developing intuitive
            web apps and websites. The thrill of bringing ideas to life through
            elegant code and creating seamless user experiences pulled me right
            back into the world I belong to.
          </p>

          <p>
            Check out my <Link to="/work">recent work</Link>.
          </p>
        </div>

        <div className="profile__footer">
          <div className="profile__experience">
            <h2>Experience</h2>

            <div className="profile__experience__body">
              <div>
                <h3>
                  SafeCode <span>[2022 - present]</span>
                </h3>
                <p>
                  SafeCode is a subsidiary of the LeasePLUS group, specialising
                  in the development of leasing and salary packaging interfaces
                  for individuals and companies. With a user base of over
                  100,000, SafeCode serves a wide range of users all over
                  Australia.
                </p>
              </div>

              <div>
                <h3>
                  Arcadian Digital <span>[2019 - 2020]</span>
                </h3>
                <p>
                  A bespoke digital and marketing agency that tailor high
                  quality solutions to organisations of all sizes. During my
                  time there, I had the pleasure of working with extremely
                  talented engineers, despite the short duration of my tenure.
                </p>
              </div>

              <div>
                <h3>
                  Bebble <span>[2018 - 2019]</span>
                </h3>
                <p>
                  A small digital agency located in west Melbourne. With a team
                  of inhouse designers and developers - most work was done on
                  top of wordpress. Our clients were small business owners
                  expanding their e-commerce and online presence.
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
              <span className="competent">HTML</span>
              <span className="competent">jQuery</span>
              <span className="competent">CSS</span>
              <span className="competent">Sass</span>
              <span className="moderate">React</span>
              <span className="moderate">JavaScript</span>
              <span className="novice">TypeScript</span>
              {/* <span class="novice">Redux</span> */}
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
