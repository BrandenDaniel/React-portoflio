import "../assets/sass/profile.scss";
import { Link } from "react-router-dom";
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
            Check out my <Link to="/work">recent work</Link> to see what I've
            been up to over the years.
          </p>
        </div>

        <div className="profile__footer">
          <div className="profile__experience">
            <h2>Experience</h2>

            <div className="profile__experience__body">
              <div>
                <h3>
                  SafeCode <span>2022 - present</span>
                </h3>
                <p>
                  SafeCode, a LeasePLUS subsidiary, creates novated leasing and
                  salary packaging interfaces for individuals and businesses.
                  With 100,000+ users, they cater to diverse clients across
                  Australia.
                </p>
              </div>

              <div>
                <h3>
                  Arcadian Digital <span>2019 - 2020</span>
                </h3>
                <p>
                  As a bespoke digital and marketing agency, Arcadian deliver
                  tailored solutions to organisations of all sizes. I worked
                  with extremely talented engineers during my time there.{" "}
                </p>
              </div>

              <div>
                <h3>
                  Bebble <span>2018 - 2019</span>
                </h3>
                <p>
                  A small digital agency in West Melbourne with in-house
                  designers and developers. Specialising in WordPress, they
                  assist small business owners in expanding their e-commerce and
                  online presence.
                </p>
              </div>
            </div>
          </div>

          <div className="profile__stack">
            <h2>Tech stack</h2>
            {/* <div className="profile__stack__legend">
              <span>Competent</span>
              <span>Moderate</span>
              <span>Novice/Early stages</span>
            </div> */}
            <ul className="profile__stack__items">
              <li className="competent">HTML</li>
              <li className="competent">jQuery</li>
              <li className="competent">CSS</li>
              <li className="competent">Sass</li>
              <li className="moderate">React</li>
              <li className="moderate">JavaScript</li>
              <li className="novice">TypeScript</li>
              {/* <span class="novice">Redux</span> */}
            </ul>
            <a
              href={CV}
              target="_blank"
              rel="noreferrer"
              className="arrow-hover"
            >
              Download My CV.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
