import React from "react";
import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Employment from "./components/Employment";
import Achievements from "./components/Achievements";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Other components */}
      <About />
      <Education />
      <Employment />
      <Achievements />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
