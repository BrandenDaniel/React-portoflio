import "../assets/sass/pages/projects.scss";
import ReactProjectData from "../data/react-proj-data.json";
import OtherProjectData from "../data/other-proj-data.json";
import ReactProjects from "../component/ReactProjects";
import OtherProjects from "../component/OtherProjects";

function ProjectsPage() {
  let reactProjectList = [...ReactProjectData.reactProjects];
  let otherProjectList = [...OtherProjectData.otherProjects];
  return (
    <div className="projects">
      <ReactProjects data={reactProjectList} />
      <OtherProjects data={otherProjectList} />
    </div>
  );
}

export default ProjectsPage;
