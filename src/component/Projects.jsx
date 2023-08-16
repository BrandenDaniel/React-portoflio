const Projects = ({ data }) => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      {data.map((project) => (
        <>
          <a
            className="projects__item"
            href={project.URL}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={`projects__icon projects__icon--${project?.iconTheme}`}
            >
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
              <div class="projects__tech-stack">
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
};

export default Projects;
