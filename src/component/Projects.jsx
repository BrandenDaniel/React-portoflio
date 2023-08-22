const Projects = ({ data }) => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects__item">
        {data.map((project) => (
          <a href={project.URL} target="_blank" rel="noreferrer">
            <img
              src={require(`../assets/images/project-snapshots/${project.previewGif}`)}
              alt={`${project.name} icon`}
            />
            <div>
              <div>
                <h2>{project.name}</h2>
                <p>{project.desc}</p>
              </div>
              <div class="projects__tech-stack">
                {project.techStack.map((item) => (
                  <span>{item}</span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
