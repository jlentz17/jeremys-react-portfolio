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
          Full-stack Software developer with a background in music business, performance, and sales. Detail-oriented professional with strong problem-solving skills and a proven ability to manage multiple projects while meeting challenging deadlines.
          Earned a certificate in full stack development from the University of Arizona (October 2021), and worked as Software Engineer I for a year with newly developed skills in JavaScript, CSS, React.js, Ruby on Rails, and responsive web design. <br /><br/>At my previous job I:
          </h4>
          <br />
          <ul>
            <li>
              Wrote Ruby on Rails controllers, migrations, routes, and models to support new features for both the customer facing platform and Operations/Admin Apps.
            </li>
            <br />
            <li>
              Developed screen views, navigation, and flow of web application using React, based on Adobe XD designs, to implement and deploy to production, while maintaining and updating our legacy applications running on Ruby on Rails and NextJS.
              
            </li>
            <br />
            <li>
              Produced multiple visual elements of web applications by translating UI/UX design wireframes into code within the deadline given
            </li>
          </ul>
        </div>
        <a href="#projects">
          <img src="assets/down.png" alt="down arrow" />
        </a>
      </div>
    </div>
  );
}

export default ProjectsList;
