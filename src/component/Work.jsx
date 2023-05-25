import { workObj } from "../project-data/data";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function Work(props) {
  const list = [...workObj];
  const project = list[props.index];

  return (
    <div className="work-page">
      <div className="work-page__description">
        <h1>{project.title}</h1>
        <p>{project.longDesc}</p>
      </div>

      <div className="work-page__info">
        <span>
          Role: <span>{project.role}</span>
        </span>
        <span>
          Year: <span>{project.year}</span>
        </span>
      </div>
      <Link to="/work" className="work-page__back circle-hover">
        <FontAwesomeIcon icon={faArrowLeft} />{" "}
      </Link>
      <div className="work-page__gallery">
        {project.snapshot.map(function (src) {
          return (
            <div className="work-page__gallery__img">
              <img
                src={require(`../assets/images/work-snapshots/${src}`)}
                alt=""
              />
            </div>
          );
        })}

        <div className="work-page__gallery__mobile">
          {project.snapshotMobile.map(function (src) {
            return (
              <div className="work-page__gallery__img">
                <img
                  src={require(`../assets/images/work-snapshots/${src}`)}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
