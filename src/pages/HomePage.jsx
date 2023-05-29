import { Link } from "react-router-dom";
import "../assets/sass/home.scss";
import WorkItem from "../component/WorkItem";
import { workObj } from "../project-data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import CV from "../assets/docs/CV.pdf";

function Home() {
  const projectList = [...workObj];

  return (
    <div className="home">
      <div className="home__header">
        <h1>
          A front-end developer with a profound <span></span> for translating
          creativity into captivating <span></span>
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
        <h2>
          👋 Hey I'm Branden, a design-focused web developer based in Melbourne.
          I'm currently working at SafeCode, where I craft intuitive interfaces
          for a user base of over 100,000 individuals.
        </h2>

        <Link to="/profile" className="arrow-hover">
          View Profile <FontAwesomeIcon icon={faArrowRightLong} />
        </Link>
      </div>

      <h3>Selected work</h3>
      <div className="home__selected-work">
        {projectList.map(function (prop) {
          return (
            <WorkItem
              title={prop.title}
              thumbnail={prop.thumbnail}
              id={prop.id}
              description={prop.shortDesc}
              pathname={prop.id}
              key={prop.id}
            />
          );
        })}
        <Link to="/work">Check out the rest</Link>
      </div>
    </div>
  );
}

export default Home;
