import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OtherProjects = ({ data }) => {
  return (
    <div className="other-projects">
      <h1>Other projects</h1>
      {data.map((project) => (
        <>
          <a
            className="other-projects__item"
            href={project.URL}
            target="_blank"
            rel="noreferrer"
          >
            <div
              className={`react-projects__icon react-projects__icon--${project?.iconTheme}`}
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
              <div class="other-projects__tech-stack">
                {project.techStack.map((item) => (
                  <span>{item}</span>
                ))}
              </div>

              {/* <div className="other-projects__external-links">
                <a
                  href="https://github.com/BrandenDaniel"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div> */}
            </div>
          </a>
        </>
      ))}
    </div>
  );
};

export default OtherProjects;
