import "../assets/sass/pages/work.scss";
import { Link } from "react-router-dom";

const WorkCard = (props) => {
  return (
    <div className={`selected-work selected-work--${props.id}`}>
      <div className="selected-work__thumbnail">
        <img
          src={require(`../assets/images/work-logos/${props.thumbnail}`)}
          alt={props.title}
          loading="lazy"
        />
      </div>
      <Link to={`/${props.pathname}`} className="selected-work__content">
        <div>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
        <span className="arrow-hover">
          Explore more
          <span className="material-symbols-outlined">north_east</span>
        </span>
      </Link>
    </div>
  );
};

export default WorkCard;
