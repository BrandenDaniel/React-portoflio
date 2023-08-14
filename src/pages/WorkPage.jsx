import WorkCard from "../component/WorkCard";
import workJson from "../data/work-data.json";

function WorkPage() {
  const projectList = { ...workJson };

  return (
    <main className="work">
      <div className="work__list">
        <h1>Work</h1>

        {Object.keys(projectList).map(function (prop) {
          return (
            <WorkCard
              title={projectList[prop].title}
              thumbnail={projectList[prop].thumbnail}
              id={projectList[prop].id}
              description={projectList[prop].shortDesc}
              pathname={projectList[prop].id}
              key={projectList[prop].id}
            />
          );
        })}
      </div>
    </main>
  );
}

export default WorkPage;
