import './navigation.style.scss';
import { links } from '../../lib/data';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navigation() {
  const [currentHash, setCurrentHash] = useState('#home');
  const [showMenu, setShowMenu] = useState(false);

  const handlerCurrentHash = (hash) => {
    setCurrentHash(hash);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <nav>
      <div className="nav-container">
        <h1 className="logo">ZM</h1>
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.hash}
                className={link.hash === currentHash ? 'active' : ''}
                onClick={() => handlerCurrentHash(link.hash)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="menu-icon" onClick={toggleMenu}>
          {showMenu ? <FaTimes size={'2em'} /> : <FaBars size={'2em'} />}
        </div>
      </div>
      <ul className={`nav-dropdown ${showMenu ? 'active' : ''}`}>
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.hash}
              className={link.hash === currentHash ? 'active' : ''}
              onClick={() => handlerCurrentHash(link.hash)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
