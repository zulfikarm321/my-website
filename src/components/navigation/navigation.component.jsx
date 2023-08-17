import './navigation.style.scss';
import { links } from '../../lib/data';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navigation() {
  const [currentHash, setCurrentHash] = useState('#home');
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      let newHash = '#home';
      for (const link of links) {
        const targetElement = document.querySelector(link.hash);
        if (targetElement) {
          const elementTop =
            targetElement.getBoundingClientRect().top + window.scrollY;
          if (elementTop <= scrollPosition + 1) {
            newHash = link.hash;
          }
        }
      }

      setCurrentHash(newHash);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
