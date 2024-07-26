import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = " Hello World!";
  const typingSpeed = 200;

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        setIsTyping(false);
        clearInterval(intervalId);
      }
    }, typingSpeed);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="home">
      <div className="home-content">
        <div className="intro">
          <span className="introSymbol">&gt;</span>
          {text}
          <span className={`cursor ${isTyping ? "" : "blinking"}`}>|</span>
        </div>
        <h1>Jun Hayashi</h1>
        <p>
          Welcome to my portfolio! I'm a developer with a passion for creating
          dynamic and responsive web applications. Here, you'll find some of the
          projects I've worked on and ways to get in touch with me. I hope you
          enjoy exploring my work!
        </p>
        <div className="home-buttons">
          <a href="/resume.pdf" className="resume-button" target="_blank">
            Download CV{" "}
            <FontAwesomeIcon icon={faDownload} className="download-icon" />
          </a>
          <a
            href="https://github.com/kevinjunh?tab=repositories"
            className="icon-link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/jun-hayashi-a41873172/"
            className="icon-link"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="home-image">
        <img src="/cube.png" alt="cube" />
      </div>
    </section>
  );
}

export default Home;
