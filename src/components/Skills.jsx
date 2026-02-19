import React from "react";

const SKILLS = [
  {
    title: "Frontend",
    list: ["HTML", "CSS", "JavaScript", "Python"],
  },
  {
    title: "Backend",
    list: ["Node.js", "Express.js"],
  },
  {
    title: "Frameworks",
    list: ["ReactJS", "Next.js", "SASS", "TailwindCSS"],
  },
  {
    title: "Databases",
    list: ["MongoDB", "SQL"],
  },
  {
    title: "Tools",
    list: ["Git", "GitHub", "Figma"],
  },
];

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="title">Skills</h2>
      {SKILLS.map((skill) => (
        <div className="skills__group" key={skill.title}>
          <h3 className="skills__title">{skill.title}</h3>
          <ul className="skills__list">
            {skill.list.map((item) => (
              <li className="skills__item" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Skills;
