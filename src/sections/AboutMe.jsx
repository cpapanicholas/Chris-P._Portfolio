import React from 'react';
import '../App.css'; // Ensure to create and import a CSS file for styling

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <h2>About Me</h2>
      <p>
        I am passionate about web development and creating innovative solutions. My journey in coding started in September 2023, and I have been on a continuous learning path since then.
      </p>
      <p>
        I completed a full-stack web development certification from Northwestern University. Though my experience is limited to what I learned in class, I have been actively strengthening my problem-solving skills through platforms like CodeWars. 
      </p>
      <p>
        I am seeking an entry-level position in the web development field, but I am also open to internships. I have been diligently preparing for interviews and aim to excel in my first job experience. Despite being relatively new to this field, I am dedicated to learning and growing as a developer.
      </p>
      <p>
        Taking the leap to learn web development has been one of the best decisions I have made, and I look forward to continually improving my skills.
      </p>
      
      <h3>Skills</h3>
      <ul>
        <li>HTML, CSS, JavaScript</li>
        <li>React, Node.js, Express</li>
        <li>MongoDB/Mongoose, GraphQL, MySQL, NoSQL, Sequilize </li>
        <li>Problem-solving and Debugging</li>
        <li>Responsive Design and Server/Client side API  </li>
        <li>Team Collaboration</li>
      </ul>

      <h3>Interests</h3>
      <p>
        Aside from coding I love to read, and play video games.  I spend a lot of time outside and at the gym as well; physical health is just as important as mental health. I also enjoy cooking and trying new foods.
      </p>
    </div>
  );
};

export default AboutMe;