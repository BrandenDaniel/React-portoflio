import { Link } from "react-router-dom";
import "../assets/sass/base.scss";
import "../assets/sass/home.scss";
import Nav from "../component/Nav";
import WorkItem from "../component/WorkItem";
import { workObj } from "../project-data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const projectList = [...workObj];

  return (
    <div className="home container">
      <Nav />

      <div className="home__header">
        <h1>
          A front-end web developer whose passion lies in transforming
          creativity into web.
        </h1>

        <h2>
          👋 Hey I'm Branden, a design-focused web developer based in Melbourne.
          I am currently working at SafeCode - building intuitive web portals
          for over 80,000 users.
        </h2>
        <Link to="/profile">
          View Profile <FontAwesomeIcon icon={faArrowRightLong} />
        </Link>
      </div>

      <div className="home__selected-work">
        <h3>Selected work</h3>

        {projectList.map(function (prop) {
          return (
            <WorkItem
              title={prop.title}
              thumbnail={prop.thumbnail}
              id={prop.id}
              description={prop.desc}
              key={prop.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Home;
