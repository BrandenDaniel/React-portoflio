import WorkItem from "../component/WorkCard";
import { workObj } from "../project-data/data";

function WorkPage() {
  const projectList = [...workObj];

  return (
    <div className="work">
      <div className="work__list">
        <h1>Work</h1>

        {/* <p>
          Browse through a list of real client projects handcrafted by me in the
          past four years.
        </p> */}

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
      </div>
    </div>
  );
}

export default WorkPage;
