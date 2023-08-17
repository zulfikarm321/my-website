import './projects.style.scss';
import { projects } from '../../lib/data';
import { FaGithub } from 'react-icons/fa';
import Button from '../button/button.component';

function Projects(props) {
  return (
    <div id="projects">
      <h1>My Projects</h1>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-preview">
              <img src={project.preview} alt="project preview image" />
            </div>
            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className="buttons">
                <Button buttonType="dark">
                  Github Repo
                  <FaGithub />
                </Button>
                <Button buttonType="light">
                  Github Repo
                  <FaGithub />
                </Button>
              </div>

              {/* <div className="tags">
                {project.tags.map((tag) => (
                  <div>{tag}</div>
                ))}
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
