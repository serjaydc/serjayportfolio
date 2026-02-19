import React from "react";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";

const Main = () => {
  return (
    <main className="main">
      <About />
      <Skills />
      <Education />
      <Projects />
    </main>
  );
};

export default Main;
