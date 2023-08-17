import './header.style.scss';
import Avatar from '../../assets/avatar.png';
import { FaLinkedin, FaGithub, FaDribbble, FaInstagram } from 'react-icons/fa';

function Header(props) {
  return (
    <div id="home">
      <main>
        <div className="avatar">
          <img src={Avatar} alt="avatar image" />
        </div>

        <div className="header-text">
          <p>Hello i'm</p>
          <h1>Zulfikar Muhamad</h1>
          <span>Frontend Developer</span>
        </div>

        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/zulfikar-muhamad-152966275/"
            target="__blank"
          >
            <FaLinkedin size={'2em'} />
          </a>
          <a href="https://github.com/zulfikarm321" target="__blank">
            <FaGithub size={'2em'} />
          </a>
          <a href="https://dribbble.com/zulfikar123" target="__blank">
            <FaDribbble size={'2em'} />
          </a>
          <a
            href="https://www.instagram.com/zulfikar_muhamad_/"
            target="__blank"
          >
            <FaInstagram size={'2em'} />
          </a>
        </div>

        <div className="cta-buttons"></div>
      </main>
    </div>
  );
}

export default Header;
