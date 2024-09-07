import React, { useState, useEffect } from "react";
import { skillsData } from "../data/skillsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/Skills.css";

const SkillCategory = ({ category, skills }) => (
  <div className="skill-category">
    <h3>{category}</h3>
    <ul>
      {skills.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </ul>
  </div>
);

const SkillItem = ({ skill }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setWidth(skill.level), 50);
    return () => clearTimeout(timeout);
  }, [skill.level]);

  return (
    <li className="skill-item">
      <div className="skill-details">
        <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
        <div className="skill-name">{skill.name}</div>
      </div>
      <div className="skill-progressbar">
        <div className="fill" style={{ width: `${width}%` }}></div>
      </div>
    </li>
  );
};

function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(skillsData[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className={`skills-section ${isVisible ? "fade-in" : ""}`}>
      <div className="skills-container">
        <SkillCategory
          category={selectedCategory.category}
          skills={selectedCategory.skills}
        />
        <div className="skills-buttons">
          {skillsData.map((item, index) => (
            <button
              key={index}
              className={`category-button ${
                selectedCategory.category === item.category ? "active" : ""
              }`}
              onClick={() => setSelectedCategory(item)}
            >
              <FontAwesomeIcon icon={item.icon} className="category-icon" />
              <span className="category-label">{item.category}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
