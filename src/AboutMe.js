import React from 'react';
import aboutMe from './setpa/self.png';
import './App.css';

export default function AboutMe() {
  return (
    <section className="about-me">
      <h2>About Me</h2>
      <p>Hello, everyone! I am Arvin Zoleta, a computer science student from De La Salle Lipa and I am passionate about coding and web development.</p>
      <img src={aboutMe} alt="About Me" style={{ maxWidth: '40%', height: 'auto' }} />
    </section>
  );
}
