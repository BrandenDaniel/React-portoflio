import "../assets/sass/work.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const WorkItem = (props) => {
  return (
    <div className={`selected-work selected-work--${props.id}`}>
      <div className="selected-work__thumbnail">
        <img
          src={require(`../assets/images/${props.thumbnail}`)}
          alt={props.title}
        />
      </div>
      <div className="selected-work__content">
        <div>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
        <Link to={`/${props.pathname}`} className="arrow-hover">
          Read more
          <FontAwesomeIcon icon={faArrowRightLong} />
        </Link>
      </div>
    </div>
  );
};

export default WorkItem;
