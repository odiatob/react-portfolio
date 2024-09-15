import React from 'react';
import project1 from './setpa/project1.png'; 
import project2 from './setpa/project2.jpg'; 
import project3 from './setpa/project3.jpg'; 
import './App.css'; // If you need styles from your App.css

export default function Projects() {
  return (
    <section className="project-section">
      <h2>Projects</h2>

      <div className="project-item">
        <h3 className="project-title">Sensor Detector</h3>
        <img src={project1} alt="Project 1" style={{ maxWidth: '100%', height: 'auto' }} />
        <p className="project-description">Description: "The Sensor Detector is a system designed to detect and monitor environmental changes, providing real-time alerts for safety and efficiency in various applications."</p>
      </div>

      <div className="project-item">
        <h3 className="project-title">Tricycle Toy</h3>
        <img src={project2} alt="Project 2" style={{ maxWidth: '100%', height: 'auto' }} />
        <p className="project-description">Description: "The Tricycle Toy is an interactive and educational toy designed to engage young children, promoting motor skills development while offering fun and imaginative play."" </p>
      </div>

      <div className="project-item">
        <h3 className="project-title">Cyber Security Monitoring App</h3>
        <img src={project3} alt="Project 3" style={{ maxWidth: '100%', height: 'auto' }} />
        <p className="project-description">Description: "The Cyber Security Monitoring App provides real-time surveillance and alerts for potential security threats, ensuring proactive protection and response to safeguard sensitive data and systems."</p>
      </div>
    </section>
  );
}
