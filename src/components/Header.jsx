import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <NavLink exact to="/" className="title">
        <img src="3dcube.png" alt="logo" />
        <h1>Portfolio</h1>
      </NavLink>
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" activeClassName="active">
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" activeClassName="active">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact
          </NavLink>
        </li>
      </ul>
      <button className="menu-icon" onClick={toggleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
      </button>
    </header>
  );
}

export default Header;
