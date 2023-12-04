import React from 'react';

const Project = ({ name, deployedLink, githubLink }) => {
  return (
    <div className="project">
      {/* Add an image tag here for the project screenshot or GIF */}
      {/* <img src="path_to_your_image" alt="Project Screenshot" /> */}

      <h3>{name}</h3>
      <p>
        <strong>Deployed Link:</strong>{' '}
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          {deployedLink}
          <img src={'../assets/image(1).png'} alt={`${Project.screenshot} Screenshot`} style={{ maxWidth: '100%' }} />
        </a>
      </p>
      <p>
        <strong>GitHub:</strong>{' '}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          {githubLink}
          <img src={'../assets/image(2).png'} alt={`${Project.screenshot} Screenshot`} style={{ maxWidth: '100%' }} />
        </a>
      </p>
    </div>
  );
};

export default Project;