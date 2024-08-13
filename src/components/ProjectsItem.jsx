import PropTypes from "prop-types";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";

function ProjectsItem({ data, index }) {
  const [hover, setHover] = useState(0);

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(null);
  }

  const {
    projectName,
    projectImage,
    projectStatement,
    projectSite,
    projectSource,
    projectSkills,
    id,
  } = data;

  return (
    <div id="projects" className="projects">
      <h1>{projectName}</h1>
      <a
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave()}
        className={index === hover ? "active" : ""}
        aria-label="project-demo"
        rel="noreferrer"
        target="_blank"
        href={projectSite}
      >
        <img src={projectImage} alt="project images" />
      </a>

      <div className="projects-description">
        <p>{projectStatement}</p>
      </div>
      <div className="project-skills">
        {projectSkills.map((skill, skillIndex) => (
          <span className="project-skill" key={`${id}-${skillIndex}`}>
            {skill}
          </span>
        ))}
      </div>
      <div className="project-btn">
        <a
          aria-label="project-demo"
          rel="noreferrer"
          target="_blank"
          href={projectSite}
        >
          <button>
            <span>Demo</span>
            <IconExternalLink />
          </button>
        </a>
        <a
          aria-label="project-demo"
          rel="noreferrer"
          target="_blank"
          href={projectSource}
        >
          <button>
            <span>Source</span>
            <IconBrandGithub />
          </button>
        </a>
      </div>
    </div>
  );
}

ProjectsItem.propTypes = {
  data: PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    projectImage: PropTypes.string.isRequired,
    projectStatement: PropTypes.string.isRequired,
    projectSite: PropTypes.string.isRequired,
    projectSource: PropTypes.string.isRequired,
    projectSkills: PropTypes.arrayOf(PropTypes.string).isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default ProjectsItem;
