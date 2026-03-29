import React from "react";
import author from "/personal.jpg";

import { FaFileDownload, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <img src={author} alt="Author Image" className="hero__image" />
      <div className="hero__details">
        <h1 className="hero__name">Serjay Antsibor</h1>
        <h2 className="hero__title">Front-End Developer</h2>
        <h3 className="hero__location">📍 London, United Kingdom</h3>
        <p className="hero__description">
          Plan, Design, Develop, Test, Deploy.
        </p>
      </div>
      <ul className="hero__cta">
        <li>
          <a
            href="https://drive.google.com/file/d/1dctCDsrVpv6lUR3O6EhhQ6d8PtAKiwO1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFileDownload className="hero__icon" /> Resume
          </a>
        </li>
        <li>
          <a
            href="https://github.com/serjaydc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hero__icon" />
          </a>
        </li>
        <li>
          <a
            href="www.linkedin.com/in/serjayantsibor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hero__icon" />
          </a>
        </li>
      </ul>
      <div className="hero__contact">
        <h2>Want to Work Together?</h2>
        {/* <button className="btn btn-primary btn-contact">Get in Touch</button> */}
        <a href="mailto:serhiinote@gmail.com" className="btn btn-primary">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
