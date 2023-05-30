import "../assets/sass/pages/work.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const WorkCard = (props) => {
  return (
    <div className={`selected-work selected-work--${props.id}`}>
      <div className="selected-work__thumbnail">
        <img
          src={require(`../assets/images/work-logos/${props.thumbnail}`)}
          alt={props.title}
        />
      </div>
      <Link to={`/${props.pathname}`} className="selected-work__content">
        <div>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
        <span className="arrow-hover">
          Explore more
          <FontAwesomeIcon icon={faArrowRightLong} />
        </span>
      </Link>
    </div>
  );
};

export default WorkCard;
