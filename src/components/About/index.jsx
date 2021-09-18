import React from "react";
// import coverImage from "../../assets/cover/background-img-portfolio.jpeg";
import "./about.scss"

function About() {
  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/profilePic/headshot-maybe.png" alt=""/>
        </div>
      </div>
      <div className="right"></div>
      <div className="wrapper">
        <h2>Hey! My name is</h2>
        <h1>Jeremy.</h1>
        <h3></h3>
      </div>
    </div>
  );
}

export default About;
