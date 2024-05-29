import React from 'react';

const Resume = () => {
  const resumeLink = 'https://sparkling-gingersnap-7df8bb.netlify.app/'; // Replace with your actual resume link

  return (
    <div className="resume-container">
      <h2>My Resume</h2>
      <a href={resumeLink} target="_blank" rel="noopener noreferrer" className="download-button">
        Download Resume
      </a>
      
      <section className="resume-section">
        <h3>Summary</h3>
        <p>
          After reading about the abundance of technology jobs in more recent times, I did some research on the necessary
          education required for an entry-level tech job. I discovered a web developer program through Northwestern University (IL) and decided to take the 3-month accelerated course to kickstart my journey into web development.
        </p>
        <p>
          Throughout the course, I immersed myself in various projects, learning front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, MySQL, GraphQL, and MongoDB. I enjoyed the challenges and have been consistently practicing and studying coding since then. I love functional, organized, and efficient code, and I thrive in collaborative environments.
        </p>
        <p>
          I am currently working on a workout smartphone app with my last project group. You can find a list of all my projects on my portfolio website.
        </p>
        <p>
          <a href="https://sparkling-gingersnap-7df8bb.netlify.app/" target="_blank" rel="noopener noreferrer">
            Portfolio Website
          </a>
        </p>
      </section>

      <section className="resume-section">
        <h3>Experience</h3>
        <div className="resume-item">
          <h4>Server and Bartender - Buffalo Wild Wings</h4>
          <p>Sep 2023 - Present (8 months)</p>
        </div>
        <div className="resume-item">
          <h4>CNC Machine Operator/Technician - Napco Brands</h4>
          <p>Mar 2023 - Aug 2023 (6 months)</p>
          <p>
            Learned to operate and maintain every machine on the floor. Supervised two machines and trained new operators.
          </p>
        </div>
        <div className="resume-item">
          <h4>Sales Specialist - Toyota Motor Corporation</h4>
          <p>Jun 2022 - Mar 2023 (10 months)</p>
          <ul>
            <li>Provided customers with ample information and a hands-on experience.</li>
            <li>Displayed exceptional knowledge of Toyota's vehicles and sales processes.</li>
          </ul>
        </div>
        <div className="resume-item">
          <h4>Order Picker - Lowe's Companies, Inc.</h4>
          <p>Nov 2021 - Jun 2022 (8 months)</p>
          <ul>
            <li>Ensured online orders were completed and organized correctly.</li>
            <li>Resolved customer service issues efficiently.</li>
          </ul>
        </div>
        <div className="resume-item">
          <h4>Team Supervisor - Affordable Party Tent Rentals</h4>
          <p>Feb 2021 - Nov 2021 (10 months)</p>
          <ul>
            <li>Ensured safe delivery and setup for customers.</li>
            <li>Trained new employees on setup and dismantling processes.</li>
          </ul>
        </div>
        <div className="resume-item">
          <h4>Host/Busser/Server</h4>
          <p>Aug 2019 - Feb 2020 (7 months)</p>
          <ul>
            <li>Greeted customers and managed carryout orders efficiently.</li>
            <li>Provided personalized service as a server.</li>
          </ul>
        </div>
        <div className="resume-item">
          <h4>Ground Crew - Napco Brands</h4>
          <p>May 2015 - Aug 2019 (4 years 4 months)</p>
          <ul>
            <li>Completed orders on time and ensured product standards.</li>
            <li>Assisted management with various tasks.</li>
          </ul>
        </div>
      </section>

      <section className="resume-section">
        <h3>Education</h3>
        <div className="resume-item">
          <h4>Certification in Full-Stack Development - Northwestern University</h4>
          <p>Sep 2023 - Dec 2023</p>
          <p>
            This fast-paced course covered topics including Node.js, JavaScript, React, GraphQL, MongoDB, Heroku, Render, CSS, HTML5, MySQL, NoSQL, Express, jQuery, Responsive Design, Bootstrap, and more.
          </p>
        </div>
      </section>

      <section className="resume-section">
        <h3>Certifications</h3>
        <div className="resume-item">
          <h4>Full Stack Web Developer - Northwestern University</h4>
        </div>
      </section>

      <section className="resume-section">
        <h3>Skills</h3>
        <ul className="skills-list">
          <li>MongoDB</li>
          <li>GraphQL</li>
          <li>Redux.js</li>
          <li>Node.js</li>
          <li>JavaScript</li>
          <li>Web Development</li>
          <li>React.js</li>
          <li>MERN Stack</li>
        </ul>
      </section>
    </div>
  );
};

export default Resume;
