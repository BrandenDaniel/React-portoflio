import "../assets/sass/work.scss";
import { Link } from "react-router-dom";

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
        <h4>{props.title}</h4>
        <p>{props.description}</p>
        <Link to="/">Find out more</Link>
      </div>
    </div>
  );
};

export default WorkItem;
