import "../assets/sass/pages/reactProjects.scss";
import ReactProjectData from "../data/react-proj-data.json";

function ReactProjectsPage() {
  let reactProjectList = [...ReactProjectData.reactProjects];
  return (
    <div className="react-projects">
      <h1>React projects</h1>
      {reactProjectList.map((project) => (
        <>
          <a
            className="react-projects__item"
            href={project.URL}
            target="_blank"
            rel="noreferrer"
          >
            <div className="react-projects__icon">
              <span>
                <img
                  src={require(`../assets/images/project-icons/${project.icon}`)}
                  alt={`${project.name} icon`}
                />
              </span>
            </div>
            <div>
              <h2>{project.name}</h2>
              <p>{project.desc}</p>
              <div class="react-projects__tech-stack">
                {project.techStack.map((item) => (
                  <span>{item}</span>
                ))}
              </div>
            </div>
          </a>
        </>
      ))}
    </div>
  );
}

export default ReactProjectsPage;
