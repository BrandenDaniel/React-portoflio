import { Link } from "react-router-dom";
import "../assets/sass/pages/home.scss";
import WorkCard from "../component/WorkCard";
import workJson from "../project-data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import CV from "../assets/docs/CV.pdf";

function Home() {
  const projectList = { ...workJson };

  const viewMoreWork = () => {
    document
      .querySelector(".home__selected-work")
      .classList.add("home__selected-work--show-all");

    document.querySelector(".home__view-more").style.display = "none";
  };

  const showMoreBio = () => {
    document
      .querySelector(".home__profile__bio > div")
      .classList.add("home__profile__bio--show-all");

    document.querySelector(".home__profile__read-more").style.display = "none";
  };

  return (
    <div className="home">
      <div className="home__header">
        <h1>
          A front-end developer with a profound <span></span> <span></span>{" "}
          translating creativity into captivating <span></span> <span></span>
        </h1>
        <div className="home__external-links">
          <div>
            <a
              href="https://www.linkedin.com/in/brandendaniel/"
              target="_blank"
              className="circle-hover"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>

            <a
              href="https://github.com/BrandenDaniel"
              target="_blank"
              className="circle-hover"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>

            <a
              href="mailto:brandendanielng@gmail.com"
              target="_blank"
              className="circle-hover"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>

          <a
            href={CV}
            target="_blank"
            rel="noreferrer"
            className="resume-download"
          >
            Download My CV.
          </a>
        </div>

        <div className="home__profile__bio">
          <h2>
            👋 Hey I'm Branden, a design-focused web developer based in
            Melbourne. I'm currently working at SafeCode, where I craft
            intuitive interfaces for a user base of over 100,000 individuals.
            <div
              className="home__profile__read-more"
              onClick={() => showMoreBio()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </h2>

          <div>
            <h2>
              I've been passionately immersed in the world of front-end dev
              since early 2019. Over the years, I've had the incredible
              opportunity to work with both corporations and smaller creative
              digital agencies.
            </h2>

            <h2>
              Me and CSS - we're best friends. The process of transforming
              intricate designs into clean, stuctured stylesheets is what I live
              for. I enjoy tackling complicated layouts and seamlessly bring a
              designer's vision to life.
            </h2>

            <h2>
              After taking a transformative break to explore an alternative
              career path, I've been steered right back to where I belong -
              making fun, intuitive, and gorgeous websites.
            </h2>
          </div>
        </div>
      </div>

      <h3>Work</h3>
      <div className="home__selected-work">
        {Object.keys(projectList).map(function (prop) {
          return (
            <WorkCard
              title={projectList[prop].title}
              thumbnail={projectList[prop].thumbnail}
              id={projectList[prop].id}
              description={projectList[prop].shortDesc}
              pathname={projectList[prop].id}
              key={projectList[prop].id}
            />
          );
        })}
        <span to="#" className="home__view-more" onClick={() => viewMoreWork()}>
          View more
        </span>
      </div>
    </div>
  );
}

export default Home;
