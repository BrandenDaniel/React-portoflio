import { Link } from "react-router-dom";
import "../assets/sass/home.scss";
import WorkItem from "../component/WorkItem";
import { workObj } from "../project-data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const projectList = [...workObj];

  return (
    <div className="home">
      <div className="home__header">
        <h1>
          A front-end web developer whose passion lies in transforming
          creativity into web.
        </h1>

        <h2>
          👋 Hey I'm Branden, a design-focused web developer located in
          Melbourne. I specialise in creating intuitive web sites/portals and
          I'm currently employed at SafeCode, where I develop user-friendly
          interfaces for a large user base of over 100,000 individuals.
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
              description={prop.desc}
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
