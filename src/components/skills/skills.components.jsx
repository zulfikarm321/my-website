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
import {
  SiExpress,
  SiNuxtdotjs,
  SiTailwindcss,
  SiNextdotjs
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import {} from 'react-icons/si';

import IconWrapper from '../iconwrapper/iconwrapper.component';

function Skills(props) {
  return (
    <section id="skills">
      <main>
        <h1>My Skills</h1>
        <div className="skills-list">
          <IconWrapper>
            <FaHtml5 size={'3em'} style={{ color: '#eb8934' }} />
            <span>HTML</span>
          </IconWrapper>
          <IconWrapper>
            <FaCss3 size={'3em'} style={{ color: 'blue' }} /> <span>CSS</span>
          </IconWrapper>
          <IconWrapper>
            <FaSass size={'3em'} style={{ color: '#eb3483' }} />
            <span>SASS</span>
          </IconWrapper>
          <IconWrapper>
            <SiTailwindcss size={'3em'} style={{ color: '#34e8eb' }} />
            <span>TAIILWIND</span>
          </IconWrapper>
          <IconWrapper>
            <FaNodeJs size={'3em'} style={{ color: '#34eb49' }} />
            <span>NODEJS</span>
          </IconWrapper>{' '}
          <IconWrapper>
            <SiExpress size={'3em'} style={{ color: '#34eb6b' }} />
            <span>EXPRESS</span>
          </IconWrapper>
          <IconWrapper>
            <FaReact size={'3em'} style={{ color: '#34b1eb' }} />
            <span>REACT</span>
          </IconWrapper>
          <IconWrapper>
            <SiNextdotjs size={'3em'} style={{ color: '#34b1eb' }} />
            <span>NEXT</span>
          </IconWrapper>
          <IconWrapper>
            <FaVuejs size={'3em'} style={{ color: '#34eb8f' }} />
            <span>VUE</span>
          </IconWrapper>
          <IconWrapper>
            <SiNuxtdotjs size={'3em'} style={{ color: '#34eb8f' }} />
            <span>NUXT</span>
          </IconWrapper>
          <IconWrapper>
            <GrMysql size={'3em'} style={{ color: '#34b1eb' }} />
            <span>MYSQL</span>
          </IconWrapper>
          <IconWrapper>
            <FaGit size={'3em'} style={{ color: '#eb8f34' }} />
            <span>GIT</span>
          </IconWrapper>
        </div>
      </main>
    </section>
  );
}

export default Skills;
