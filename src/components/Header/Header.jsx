/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import './Header.scss';

function Header() {
  const [isNavbarOpen, setNavbarOpen] = useState(true);
  const handleClick = () => {
    setNavbarOpen((current) => !current);
  };

  const openNavbar = {
    left: 0,
    transition: 'all 0.5s',
  };

  const closeNavbar = {
    left: '-100%',
    transition: 'all 0.5s',
  };
  return (
    <nav className="navbar">
      <a href="/">
        <strong className="logo">Amael.dev</strong>
      </a>
      <input type="checkbox" id="check" onChange={handleClick} />
      <label htmlFor="check" className="navbar__burguer__menu">
        <i className="fa-solid fa-bars" id="burger__icon" />
      </label>
      <ul
        className="navbar__ul"
        style={isNavbarOpen ? openNavbar : closeNavbar}
      >
        <li className="navbar__li">
          <a className="navbar__a" href="#home" onClick={handleClick}>
            Accueil
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#about" onClick={handleClick}>
            A propos
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#projects" onClick={handleClick}>
            Projets
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#skills" onClick={handleClick}>
            Compétences
          </a>
        </li>
        <li className="navbar__li">
          <a className="navbar__a" href="#contact" onClick={handleClick}>
            Contact
          </a>
        </li>
        <li className="navbar__li">
          <a
            className="navbar__a"
            href="https://www.dropbox.com/scl/fi/4voysqkgyte79qnw0as1s/CV.pdf?rlkey=w7wri6iywpcynf6yf687fn9uh&dl=0"
            rel="noreferrer"
            target="_blank"
            onClick={handleClick}
          >
            CV
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
