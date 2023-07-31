import workJson from "../work-data/data.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function WorkPageDetail(props) {
  const list = { ...workJson };
  const project = list[props.name];

  return (
    <div className="work-page">
      <div className="work-page__description">
        <h1>{project.title}</h1>
        {project.longDesc.map((para) => {
          return <p key={para}>{para}</p>;
        })}
      </div>
      <div className="work-page__small-info">
        <span>
          <span>Year:</span>
          <span className="work-page__small-info__pill">{project.year}</span>
        </span>
        <span className="work-page__small-info__stack">
          <span>Stack:</span>
          <div>
            {project.stack.map((item) => {
              return (
                <span className="work-page__small-info__pill">{item}</span>
              );
            })}
          </div>
        </span>
      </div>
      <Link to="/work" className="work-page__back circle-hover">
        <FontAwesomeIcon icon={faArrowLeft} />
      </Link>
      <div className="work-page__gallery">
        {project.snapshot.map(function (src) {
          return (
            <div key={src} className="work-page__gallery__img">
              <img
                src={require(`../assets/images/work-snapshots/${src}`)}
                alt=""
                loading="lazy"
              />
            </div>
          );
        })}

        <div className="work-page__gallery__mobile">
          {project.snapshotMobile.map(function (src) {
            return (
              <div key={src} className="work-page__gallery__img">
                <img
                  src={require(`../assets/images/work-snapshots/${src}`)}
                  alt=""
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default WorkPageDetail;
