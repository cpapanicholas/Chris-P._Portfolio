import React from 'react';

const Resume = () => {
  // Replace 'your_resume_link' with the actual link to your resume
  const resumeLink = 'your_resume_link';

  return (
    <div>
      <h2>My Resume</h2>
      <p>
        
        <a href={resumeLink} target="_blank" rel="noopener noreferrer">
        <strong>Resume Link</strong>{' '}
        </a>
      </p>
    </div>
  );
};

export default Resume;