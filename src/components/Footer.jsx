// Footer.js
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from react-icons
import { SiIndeed } from 'react-icons/si'
const Footer = () => {
  return (
    <footer>
      <p>Connect with me on:</p>
      <div className="social-links">
        <a href="https://github.com/cpapanicholas" target="_blank" rel="noopener noreferrer">
          <FaGithub /> 
        </a>
        <a href="www.linkedin.com/in/christopher-papanicholas-b669a524b" target="_blank" rel="noopener noreferrer">
          <FaLinkedin /> 
        </a>
        <a href="https://profile.indeed.com/p/chrisp-z08dnx7" target="_blank" rel="noopener noreferrer">
          <SiIndeed /> 
        </a>
        {/* Add links to other platforms as needed */}
      </div>
    </footer>
  );
};

export default Footer;
