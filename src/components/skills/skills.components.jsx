import './skills.style.scss';
import { skills } from '../../lib/data';

function Skills(props) {
  return (
    <div id="skills">
      <main>
        <h1>My Skills</h1>
        <div className="skills-list">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              {skill}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Skills;
