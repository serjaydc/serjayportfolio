import React from "react";
import project1 from "/project1.png";
import project2 from "/project2.png";
import { FaShareSquare } from "react-icons/fa";

const PROJECTS = [
  {
    title: "MovieCat",
    image: project2,
    link: "https://moviecats.netlify.app/",
    techs: ["HTML", "SCSS", "JavaScript", "Python", "Flask", "SQLite3", "API"],
    achievements: [
      "Designed a user authentication & authorization system using Flask and SQLite3",
      "Integrated a movie database API to fetch movie information",
      "Implemented a responsive design using SCSS",
      "Developmed MPA application using Python",
    ],
  },
  {
    title: "Planet Zoo",
    image: project1,
    link: "https://planet-zoo.netlify.app/",
    techs: ["HTML", "SCSS", "JavaScript", "JQuery"],
    achievements: [
      "Used jQuery to create a dynamic and interactive user interface",
      "Implemented a form validation using JavaScript",
      "Designed a responsive layout using SCSS",
    ],
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="title">Projects</h2>

      {PROJECTS.map((project) => (
        <div className="projects__group" key={project.title}>
          <img
            src={project.image}
            alt={project.title}
            className="projects__image"
          />

          <div className="projects__details">
            <div className="projects__header">
              <h3 className="projects__title">{project.title}</h3>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <FaShareSquare />
                Live Demo
              </a>
            </div>

            <div className="projects__techs">
              {project.techs.map((tech) => (
                <span className="projects__tech" key={tech}>
                  {tech}
                </span>
              ))}
            </div>

            <ul className="projects__achievements">
              {project.achievements.map((achievement) => (
                <li className="projects__achievement" key={achievement}>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
