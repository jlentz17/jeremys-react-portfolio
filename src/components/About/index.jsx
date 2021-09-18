import React from "react";
// import coverImage from "../../assets/cover/background-img-portfolio.jpeg";
import "./about.scss";

function About() {
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
            Freelance <span>Developer</span>
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
