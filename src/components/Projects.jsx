import { projects } from "../data";

import ProjectsItem from "./ProjectsItem";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-wrapper">
        {projects && projects.length > 0 ? (
          projects.map((projectData, index) => (
            <ProjectsItem
              key={projectData.id}
              data={projectData}
              index={index}
            />
          ))
        ) : (
          <div className="no-projects">
            <h2>Projects Coming Soon 📂</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
