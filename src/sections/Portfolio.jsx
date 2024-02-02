import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
  // Define your project details
  const projects = [
    {
      name: 'Crafty-Weather (Project 1)',
      deployedLink: 'https://cpapanicholas.github.io/Crafty-Weather/',
      githubLink: 'https://github.com/cpapanicholas/Crafty-Weather',
      screenshot: '../assets/image-1.png',
    },
    {
      name: 'EV-Charger-Locator (Project 2)',
      deployedLink: 'https://desolate-cove-89215-d9792a7c3caa.herokuapp.com/',
      githubLink: 'https://github.com/jwhit-commit/ev-charger-locator',
      screenshot: '../assets/image(2).png',
    },
    {
      name: 'Sweat-Check (Project 3[Final Project])',
      deployedLink: 'https://sweat-check-1af5b01668d2.herokuapp.com/',
      githubLink: 'https://github.com/Seidler93/Sweat-Check',
      screenshot: '',
    },
    {
      name: 'HTML Assignment 1',
      deployedLink: 'https://cpapanicholas.github.io/transferable-hexa-nen/',
      githubLink: 'https://github.com/cpapanicholas/transferable-hexa-nen',
      screenshot: '',
    },
    {
      name: 'CSS Assignment 2',
      deployedLink: 'https://cpapanicholas.github.io/Transcending-Seven-Nen/#',
      githubLink: 'https://github.com/cpapanicholas/Transcending-Seven-Nen',
      screenshot: '',
    },
    {
      name: 'JavaScript Assignment 3',
      deployedLink: 'https://cpapanicholas.github.io/Baku-Taka-Nichi/',
      githubLink: 'https://github.com/cpapanicholas/Baku-Taka-Nichi',
      screenshot: '',
    },
    {
      name: 'Web APIs Assignment 4',
      deployedLink: 'https://cpapanicholas.github.io/Epsilon-Gamma-Zeta/',
      githubLink: 'https://github.com/cpapanicholas/Epsilon-Gamma-Zeta',
      screenshot: '',
    },
    {
      name: 'Third-Party-APIs Assignment 5',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'Server Side APIs Assignment 6',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'Node JS Assignment 7',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'OOP Assignment 8',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'Express Assignment 9',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'SQL Assignment 10',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'ORM Assignment 11',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'MVC Assignment 12',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'CS Assignment 13',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'NoSQL Assignment 14',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'PWA Assignment 15',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'React Assignment 16',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'MERN Assignment 17',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'PWA Assignment 15',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'Morse-Code Generator',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    }
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