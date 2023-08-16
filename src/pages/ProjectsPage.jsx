import "../assets/sass/pages/projects.scss";
import projectData from "../data/proj-data.json";
import Projects from "../component/Projects";

function ProjectsPage() {
  let projectList = [...projectData.projects];
  return <Projects data={projectList} />;
}

export default ProjectsPage;
