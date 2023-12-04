import React from 'react';

const Resume = () => {
  // Replace 'your_resume_link' with the actual link to your resume
  const resumeLink = 'your_resume_link';

  // Lists of front-end and back-end technologies
  const frontEndTechnologies = [
    'HTML',
    'CSS',
    'JavaScript',
    'jQuery',
    'Responsive Design',
    'React',
    'Bootstrap',
  ];

  const backEndTechnologies = [
    'APIs',
    'Node.js',
    'Express',
    'MySQL, Sequelize',
    'MongoDB, Mongoose',
    'GraphQL',
  ];

  return (
    <div>
      <h2>My Resume</h2>
      <p>
        
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
        <strong>Resume Link</strong>{' '}
        </a>
      </p>

      <div>
        <h3>Front-End Technologies</h3>
        <ul>
          {frontEndTechnologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Back-End Technologies</h3>
        <ul>
          {backEndTechnologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Resume;