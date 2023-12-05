import React from 'react';

const Project = ({ name, deployedLink, githubLink, screenshot }) => {
  return (
    <div className="project">
      {/* Add an image tag here for the project screenshot or GIF */}
      {/* <img src="path_to_your_image" alt="Project Screenshot" /> */}

      <h3>{name}</h3>
      <p>
       
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
        <strong>Deployed Link</strong>{' '}
          {/* <img src={screenshot} alt={`${name} Screenshot`} style={{ maxWidth: '100%' }} /> */}
        </a>
      </p>
      <p>
        
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
        <strong>GitHub</strong>{' '}
          <img src={screenshot} alt={`${name} Screenshot`} style={{ maxWidth: '100%' }} />
        </a>
      </p>
    </div>
  );
};

export default Project;