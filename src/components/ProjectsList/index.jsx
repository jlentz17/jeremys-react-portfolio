import React from "react";
import "./projectsList.scss";

function ProjectsList() {
  return (
    <div className="projectsList" id="projectsList">
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/profilePic/headshot-maybe.png" alt="headshot" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>About me:</h2>
          <h1>Born in Phoenix, AZ</h1>
          <h4>
          Full-stack Software developer with a background in music business, performance, and sales. Recently earned a certificate in full stack development from the University of Arizona, with newly developed skills in JavaScript, CSS, React.js, and responsive web design. Strong troubleshooting skills and an eye for detail in the pursuit of developing engaging apps. Works well both independently and in a team environment.  Passionate, flexible and an excellent communicator eager to learn. I applied what I learned implementing MERN stack, GraphQl and agile development in a recent project. I worked on a team of three to develop a single-page MERN app that helps local chefs search for recipes, pictures, and save and delete them from the Mongo database. I’m really excited to use my past experiences and put my skills to work in a fast-paced, quality-driven team that aims to build better experiences on the web.
          </h4>
        </div>
        <a href="#projects">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}

export default ProjectsList;
