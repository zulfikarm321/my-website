import './projects.style.scss';
import { projects } from '../../lib/data';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import Button from '../button/button.component';

function Projects(props) {
  return (
    <div id="projects">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card" data-aos="zoom-in-up">
            <div className="project-preview">
              <img src={project.preview} alt="project preview image" />
            </div>
            <div className="project-body">
              {/* <div className="tags">
                {project.tags.map((tag) => (
                  <div>{tag}</div>
                ))}
              </div> */}
              <h3>{project.title}</h3>
              <p>{project.desc}</p>

              <div className="buttons">
                <a href={project.github} target="_blank">
                  <Button buttonType="dark">
                    Github Repo
                    <FaGithub />
                  </Button>
                </a>
                <a href={project.siteLink} target="_blank">
                  <Button buttonType="light">
                    Live Demo
                    <FaGlobe />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
