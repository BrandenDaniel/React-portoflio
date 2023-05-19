import { workObj } from "../project-data/data";

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

      <div className="work-page__gallery">
        {project.snapshot.map(function (src) {
          return <img src={require(`../assets/images/${src}`)} alt="" />;
        })}
      </div>
    </div>
  );
}

export default Work;
