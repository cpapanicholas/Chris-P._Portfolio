// Footer.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons

const Footer = () => {
  return (
    <footer>
      <p>Connect with me on:</p>
      <div className="social-links">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> LinkedIn
        </a>
        {/* Add links to other platforms as needed */}
      </div>
    </footer>
  );
};

export default Footer;
