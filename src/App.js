import React from 'react';
import AboutMe from './AboutMe';
import Projects from './Projects';
import ContactMe from './ContactMe';
import References from './References';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to My Portfolio</h1>
      </header>

      <main>
        <AboutMe />

        <Projects />

        <ContactMe />

       <References />
      </main>
    </div>
  );
}

export default App;
