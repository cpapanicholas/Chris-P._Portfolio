import React from 'react';
import Project from '../components/Project';
import Crafty from '../assets/image-1.png';
import EVCharge from '../assets/image(2).png';
import SweatCheck from '../assets/SWEAT CHECK.png'
import HTML from '../assets/HTML.png';
import CSS from '../assets/CSS.png'
import JavaScript from '../assets/JAVASCRIPT.png'
import WebAPI from '../assets/WEB APIs.png'
import ThirdParty from '../assets/THIRDPARTY.png'
import Server from '../assets/SERVER.png'
const Portfolio = () => {
  // Define your project details
  const projects = [
    {
      name: 'Relational-Playlist (Current Project[In Progress!])',
      deployedLink: '',
      githubLink: 'https://github.com/cpapanicholas/Relational-Playlist',
      screenshot: RelationalPlaylist,
    },
    {
      name: 'Crafty-Weather (Project 1)',
      deployedLink: 'https://cpapanicholas.github.io/Crafty-Weather/',
      githubLink: 'https://github.com/cpapanicholas/Crafty-Weather',
      screenshot: Crafty,
    },
    {
      name: 'EV-Charger-Locator (Project 2)',
      deployedLink: 'https://desolate-cove-89215-d9792a7c3caa.herokuapp.com/',
      githubLink: 'https://github.com/jwhit-commit/ev-charger-locator',
      screenshot: EVCharge,
    },
    {
      name: 'Sweat-Check (Project 3[Final Project])',
      deployedLink: 'https://sweat-check-1af5b01668d2.herokuapp.com/',
      githubLink: 'https://github.com/Seidler93/Sweat-Check',
      screenshot: SweatCheck,
    },
    {
      name: 'HTML Assignment 1 (Basic Html Web Page)',
      deployedLink: 'https://cpapanicholas.github.io/transferable-hexa-nen/',
      githubLink: 'https://github.com/cpapanicholas/transferable-hexa-nen',
      screenshot: HTML,
    },
    {
      name: 'CSS Assignment 2 (First Portfolio)',
      deployedLink: 'https://cpapanicholas.github.io/Transcending-Seven-Nen/#',
      githubLink: 'https://github.com/cpapanicholas/Transcending-Seven-Nen',
      screenshot: CSS,
    },
    {
      name: 'JavaScript Assignment 3 (Password Generator)' ,
      deployedLink: 'https://cpapanicholas.github.io/Baku-Taka-Nichi/',
      githubLink: 'https://github.com/cpapanicholas/Baku-Taka-Nichi',
      screenshot: JavaScript,
    },
    {
      name: 'Web APIs Assignment 4 (Coding Quiz)',
      deployedLink: 'https://cpapanicholas.github.io/Epsilon-Gamma-Zeta/',
      githubLink: 'https://github.com/cpapanicholas/Epsilon-Gamma-Zeta',
      screenshot: WebAPI,
    },
    {
      name: 'Third-Party-APIs Assignment 5 (Work Day Scheduler)',
      deployedLink: '',
      githubLink: 'https://github.com/cpapanicholas/Gojo-Naka-Baya',
      screenshot: ThirdParty,
    },
    {
      name: 'Server Side APIs Assignment 6 (Weather DashBoard) ',
      deployedLink: 'https://cpapanicholas.github.io/Ruku-Zed-Taka/',
      githubLink: 'https://github.com/cpapanicholas/Ruku-Zed-Taka',
      screenshot: Server,
    },
    {
      name: 'Node JS Assignment 7 (ReadMe Generator)',
      deployedLink: '(NONE)',
      githubLink: 'https://github.com/cpapanicholas/Link-Forger-Zeta',
      screenshot: '',
    },
    {
      name: 'OOP Assignment 8 ',
      deployedLink: '',
      githubLink: 'https://github.com/cpapanicholas/Lucy-David-Zero',
      screenshot: '',
    },
    {
      name: 'Express Assignment 9',
      deployedLink: 'https://quiet-earth-63154-a0c9072cfa32.herokuapp.com/',
      githubLink: 'https://github.com/cpapanicholas/Vash-Kyoto',
      screenshot: '',
    },
    {
      name: 'SQL Assignment 10',
      deployedLink: '',
      githubLink: 'https://github.com/cpapanicholas/Mirai-ga-nai',
      screenshot: '',
    },
    {
      name: 'ORM Assignment 11',
      deployedLink: '',
      githubLink: 'https://github.com/cpapanicholas/Shi-wa-owaride-wanai',
      screenshot: '',
    },
    {
      name: 'MVC Assignment 12',
      deployedLink: 'https://boiling-cliffs-65366-fe833bd4a1cd.herokuapp.com/',
      githubLink: 'https://github.com/cpapanicholas/Kaneki-MVC',
      screenshot: '',
    },
    {
      name: 'CS Assignment 13',
      deployedLink: '(NONE)',
      githubLink: 'https://gist.github.com/cpapanicholas/4c3e2df25a938b6b82d52e1f7f9dcbe9',
      screenshot: '',
    },
    {
      name: 'NoSQL Assignment 14',
      deployedLink: '(NONE)',
      githubLink: 'https://github.com/cpapanicholas/Akanatsu-Social',
      video: 'https://drive.google.com/file/d/1WytJAob8E5SFEkzZkpUPL-yh3qFENaiK/view',
    },
    {
      name: 'PWA Assignment 15',
      deployedLink: 'https://aioto-pwa.onrender.com',
      githubLink: 'https://github.com/cpapanicholas/Aioto-PWA',
      screenshot: '',
    },
    {
      name: 'React Assignment 16',
      deployedLink: 'https://sparkling-gingersnap-7df8bb.netlify.app/',
      githubLink: 'https://github.com/cpapanicholas/Chris-P._Portfolio',
    },
    {
      name: 'MERN Assignment 17',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'State Assignment 18',
      deployedLink: '',
      githubLink: '',
      screenshot: '',
    },
    {
      name: 'Morse-Code Generator(WORK IN PROGRESS)',
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