import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleLeft,
  faArrowAltCircleRight,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/Projects.css";

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const slideLeft = () => {
    const nextIndex =
      currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1;
    setCurrentIndex(nextIndex);
    if (showPopup) {
      setSelectedProject(projectsData[nextIndex]);
      setCurrentImage(projectsData[nextIndex].image[0]);
    }
  };

  const slideRight = () => {
    const nextIndex =
      currentIndex === projectsData.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);
    if (showPopup) {
      setSelectedProject(projectsData[nextIndex]);
      setCurrentImage(projectsData[nextIndex].image[0]);
    }
  };

  const handleCardClick = (index) => {
    if (index === currentIndex) {
      setSelectedProject(projectsData[index]);
      setCurrentImage(projectsData[index].image[0]);
      setShowPopup(true);
    } else {
      setCurrentIndex(index);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setSelectedProject(null);
    setCurrentImage(null);
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const handleThumbnailClick = (img) => {
    setCurrentImage(img);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`projects ${isVisible ? "fade-in" : ""}`}>
      <h1>My projects</h1>
      <div className="projects-container">
        <button onClick={slideLeft} className="card-button prev-button">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </button>
        <div className="cards">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className={`card-single ${
                index === currentIndex ? "active" : ""
              } ${
                index === currentIndex - 1 ||
                (currentIndex === 0 && index === projectsData.length - 1)
                  ? "preactive"
                  : ""
              }${
                index === currentIndex + 1 ||
                (currentIndex === projectsData.length - 1 && index === 0)
                  ? "proactive"
                  : ""
              }`}
              onClick={() => handleCardClick(index)}
            >
              <img src={project.image[0]} alt="project" />
            </div>
          ))}
        </div>
        <button onClick={slideRight} className="card-button next-button">
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </div>
      {showPopup && selectedProject && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={closePopup}>
              &times;
            </button>
            <div className="project-details">
              <button onClick={slideLeft} className="popup-arrow prev-button">
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <div className="project-image">
                <img src={currentImage} alt="project" />
                <div className="thumbnail-gallery">
                  {selectedProject.image.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index}`}
                      className={`thumbnail ${
                        img === currentImage ? "active-thumbnail" : ""
                      }`}
                      onClick={() => handleThumbnailClick(img)}
                    />
                  ))}
                </div>
              </div>
              <div className="project-info">
                <h2>{selectedProject.title}</h2>
                <ul className="project-skills">
                  {selectedProject.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                {selectedProject.description.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
                <div className="links">
                  {selectedProject.source && (
                    <a
                      href={selectedProject.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Github
                    </a>
                  )}
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Website
                    </a>
                  )}
                </div>
              </div>
              <button onClick={slideRight} className="popup-arrow next-button">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      )}
      <div className="indicators">
        {projectsData.map((_, index) => (
          <div
            key={index}
            className={`indicator ${
              index === currentIndex ? "active-indicator" : ""
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
