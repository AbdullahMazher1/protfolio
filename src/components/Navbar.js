import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaBars } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleHover = (id) => {
    const circle = document.querySelector(`.c${id}`);
    if (circle) {
      circle.style.opacity = '1';
    }
  };

  const handleLeave = (id) => {
    const circle = document.querySelector(`.c${id}`);
    if (circle) {
      circle.style.opacity = '0';
    }
  };

  return (
    <div className='Navbar'>
      <div className='navbarleft'>
        <h1 className='navbarName'>Abdullah.</h1>
      </div>
      <div className='navbarlinks'>
        {['Home', 'About', 'Profile', 'Projects', 'Contact'].map((link, index) => (
          <div className='buttonpanel' key={link}>
            <ScrollLink
              to={link.toLowerCase()}
              smooth={true}
              duration={500}
              className='navbarbuttons'
              onMouseLeave={() => handleLeave(index + 1)}
              onMouseEnter={() => handleHover(index + 1)}
            >
              {link}
            </ScrollLink>
            <div className={`circle c${index + 1}`}></div>
          </div>
        ))}
      </div>
      <div className='navbarnext'>
        <a href="https://github.com/AbdullahMazher1" target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} className='navbaricons' color='black' />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={22} className='navbaricons' color='black'/>
        </a>
        <a href="https://www.linkedin.com/in/abdullah-mazher-a8769b289/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={22} className='navbaricons' color='black'/>
        </a>
      </div>
      <div className='navbarMenuIcon'>
        <FaBars onClick={toggleMenu} size={22} />
      </div>
      {menuOpen && (
        <div className='navbarPopup'>
          {['Home', 'About', 'Profile', 'Projects', 'Contact'].map((link) => (
            <div className='popupButtonPanel' key={link}>
              <ScrollLink
                to={link.toLowerCase()}
                smooth={true}
                duration={500}
                className='navbarPopupButtons'
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </ScrollLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
