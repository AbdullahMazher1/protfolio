import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaBars } from 'react-icons/fa';

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
            <button
              className='navbarbuttons'
              id={link}
              onMouseLeave={() => handleLeave(index + 1)}
              onMouseEnter={() => handleHover(index + 1)}
            >
              {link}
            </button>
            <div className={`circle c${index + 1}`}></div>
          </div>
        ))}
      </div>
      <div className='navbarnext'>
      <a href="https://github.com/AbdullahMazher1" target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} className='navbaricons' color='#124686;' />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={22} className='navbaricons' />
        </a>
        <a href="https://www.linkedin.com/in/abdullah-mazher-a8769b289/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={22} className='navbaricons' />
        </a>
      </div>
      <div className='navbarMenuIcon'>
        <FaBars onClick={toggleMenu} size={22} />
      </div>
      {menuOpen && (
        <div className='navbarPopup'>
          {['Home', 'About', 'Profile', 'Projects', 'Contact'].map((link, index) => (
            <div className='popupButtonPanel' key={link}>
              <button
                className='navbarPopupButtons'
                id={link}
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
