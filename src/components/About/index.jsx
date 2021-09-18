import React, { useEffect, useRef } from "react";
import "./about.scss";
import { init } from "ityped";

function About() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1800,
      backSpeed: 65,
      strings: ["Web Developer", "Programmer", "Coder"],
    });
  }, []);
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/profilePic/headshot-maybe.png" alt="headshot" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hey! My name is</h2>
          <h1>Jeremy Lentz</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#projects">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}

export default About;
