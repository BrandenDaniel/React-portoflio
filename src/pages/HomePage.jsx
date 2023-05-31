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

  return (
    <div className="home">
      <div className="home__header">
        <h1>
          A front-end developer with a profound <span></span> for translating
          creativity into captivating &nbsp;
          <span></span>&nbsp;
          <span></span>
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

        <Link to="/profile" className="home__profile-hover">
          <h2>
            👋 Hey I'm Branden, a design-focused web developer based in
            Melbourne. I'm currently working at SafeCode, where I craft
            intuitive interfaces for a user base of over 100,000 individuals.
          </h2>

          <span className="arrow-hover">
            View Profile
            <span class="material-symbols-outlined">north_east</span>
          </span>
        </Link>
      </div>

      <h3>Selected work</h3>
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
