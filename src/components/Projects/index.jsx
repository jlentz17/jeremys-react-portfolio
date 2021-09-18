import React from "react";
import "./projects.scss";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        <li className="active">Front-End</li>
        <li>Back-End</li>
        <li>Full-Stack</li>
      </ul>

      <div className="container">
        <div className="item">
          <img src="./assets/passwordGenerator.png" 
        //   width="250"
        //   height="230"
          alt="" />
          <h3>Password Generator</h3>
        </div>
        <div className="item">
          <img src="./assets/codingQuizScreenshot.png" 
        //   width="250"
        //   height="230"
          alt="" />
          <h3>Code Quiz</h3>
        </div>
        <div className="item">
          <img src="./assets/workdayScheduler.png" 
        //   width="250"
        //   height="230"
          alt="" />
          <h3>Workday Scheduler</h3>
        </div>
        <div className="item">
          <img
            src="./assets/rickAndMortyProjectScreenshot.png"
            // width="250"
            // height="230"
            alt=""
          />
          <h3>Rick and Morty App</h3>
        </div>
        <div className="item">
          <img src="./assets/food-guru-homepage.png" 
        //   width="250"
        //   height="230"
          alt="" />
          <h3>Food Guru Full-Stack</h3>
        </div>
        {/* <a href="https://jlentz17.github.io/passwordGenerator/" target="none">
          <img src="./assets/passwordGenerator.png" alt="first work" />
        </a> */}
      </div>

      {/* <div className="container">
        <div className="item">
          <h3>Code Quiz</h3>
          <p>Web API's</p>
          <p>
            <a href="https://github.com/jlentz17/code-quiz">
              CLICK ME FOR GITHUB REPO!
            </a>
          </p>
        </div>
        <a href="https://jlentz17.github.io/code-quiz/" target="none">
          <img src="./assets/codingQuizScreenShot.png" alt="second work" />
        </a>
      </div>

      <div className="container">
        <div className="item">
          <h3>Work Day Scheduler</h3>
          <p>Third-Party API's</p>
          <p>
            <a href="https://github.com/jlentz17/work-day-scheduler">
              CLICK ME FOR GITHUB REPO!
            </a>
          </p>
        </div>
        <a href="https://jlentz17.github.io/work-day-scheduler/" target="none">
          <img src="./assets/workdayScheduler.png" alt="third work" />
        </a>
      </div>

      <div className="container">
        <div className="item">
          <h3>Rick and Morty App</h3>
          <p>Group Project/Front-End</p>
          <p>
            <a href="https://github.com/jlentz17/rick-and-morty-app">
              CLICK ME FOR GITHUB REPO!
            </a>
          </p>
        </div>
        <a href="https://jlentz17.github.io/rick-and-morty-app/" target="none">
          <img
            src="./assets/rickAndMortyProjectScreenshot.png"
            alt="fourth work"
          />
        </a>
      </div>

      <div className="container">
        <div className="item">
          <h3>Food Guru Full-Stack Application</h3>
          <p>Group Project/Back-End</p>
          <p>
            <a href="https://github.com/jlentz17/food-guru/">
              CLICK ME FOR GITHUB REPO!
            </a>
          </p>
        </div>
        <a href="https://secure-forest-24217.herokuapp.com/" target="none">
          <img src="./assets/food-guru-homepage.png" alt="fifth work" />
        </a>
      </div> */}
    </div>
  );
}
