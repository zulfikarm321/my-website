import './skills.style.scss';

import {
  FaReact,
  FaHtml5,
  FaSass,
  FaCss3,
  FaVuejs,
  FaNodeJs,
  FaJs,
  FaGit
} from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { SiTailwindcss } from 'react-icons/si';

import IconWrapper from '../iconwrapper/iconwrapper.component';

function Skills(props) {
  return (
    <div id="skills">
      <main>
        <h1>My Skills</h1>
        <div className="skills-list">
          <IconWrapper>
            <FaHtml5 size={'3em'} style={{ color: '#eb8934' }} />
          </IconWrapper>
          <IconWrapper>
            <FaCss3 size={'3em'} style={{ color: 'blue' }} />
          </IconWrapper>
          <IconWrapper>
            <FaSass size={'3em'} style={{ color: '#eb3483' }} />
          </IconWrapper>
          <IconWrapper>
            <SiTailwindcss size={'3em'} style={{ color: '#34e8eb' }} />
          </IconWrapper>

          <IconWrapper>
            <FaNodeJs size={'3em'} style={{ color: '#34eb49' }} />
          </IconWrapper>
          <IconWrapper>
            <FaReact size={'3em'} style={{ color: '#34b1eb' }} />
          </IconWrapper>
          <IconWrapper>
            <FaVuejs size={'3em'} style={{ color: '#34eb8f' }} />
          </IconWrapper>
          <IconWrapper>
            <SiExpress size={'3em'} style={{ color: '#34eb6b' }} />
          </IconWrapper>
          <IconWrapper>
            <GrMysql size={'3em'} style={{ color: '#34b1eb' }} />
          </IconWrapper>
          <IconWrapper>
            <FaGit size={'3em'} style={{ color: '#eb8f34' }} />
          </IconWrapper>
        </div>

        {/* <div className="skills-list">
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
        </div> */}
      </main>
    </div>
  );
}

export default Skills;
