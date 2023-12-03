// Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/AboutMe" activeclassname="active">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/Portfolio" activeclassname="active">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/Contact" activeclassname="active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/Resume" activeclassname="active">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
