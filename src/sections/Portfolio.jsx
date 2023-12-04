import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  // Define your project details
  const projects = [
    {
      name: 'Crafty-Weather',
      deployedLink: 'https://cpapanicholas.github.io/Crafty-Weather/',
      githubLink: 'https://github.com/cpapanicholas/Crafty-Weather',
      screenshot: 'src/assets/image-1.png',
    },
    {
      name: 'EV-Charger-Locator',
      deployedLink: 'https://desolate-cove-89215-d9792a7c3caa.herokuapp.com/',
      githubLink: 'https://github.com/jwhit-commit/ev-charger-locator',
      screenshot: 'src/assets/image(2).png',
    },
    // Add more projects as needed
  ];

  return (
    <div>
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
        
      ))}
    </div>
  );
};

export default Portfolio;