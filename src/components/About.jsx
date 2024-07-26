import React, { useEffect } from "react";
import { aboutData } from "../data/aboutData";

const SectionItem = ({ date, title, description, details, skills }) => (
  <div className="section-item">
    <div className="section-content">
      <span className="date">{date}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      {details && (
        <ul className="details">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      )}
      {skills && (
        <div className="skills">
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
);

function About() {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-in");
    items.forEach((item, index) => {
      item.style.animationDelay = `${index * 0.3}s`;
    });
  }, []);

  const { education, experience } = aboutData;

  return (
    <section className="about">
      <div className="about-container">
        <div className="left-column">
          <div className="introduction  fade-in">
            <h2>About Me</h2>
            <p>
              Hello! I'm Jun, a passionate tech enthusiast with a love for
              innovation. From a young age, I've been fascinated by how
              technology can solve real-world problems, driving me to
              continuously explore and learn.
            </p>
            <p>
              Currently, I am focused on broadening my knowledge and skills in
              various areas of technology, and I am eager to contribute to
              impactful projects that address real-world needs.
            </p>
          </div>
          <div className="education  fade-in">
            <h2>Education</h2>
            {education.map((item, index) => (
              <SectionItem
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                details={item.details}
              />
            ))}
          </div>
        </div>
        <div className="right-column">
          <div className="experience  fade-in">
            <h2>Experience</h2>
            {experience.map((item, index) => (
              <SectionItem
                key={index}
                date={item.date}
                title={item.title}
                description={item.description}
                details={item.details}
                skills={item.skills}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
