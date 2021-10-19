import React from "react";
// import ProjectsList from "../ProjectsList";
import "./projects.scss";
import { Card } from "@material-ui/core";
// import { ExternalLink } from "react-external-link";

export default function Projects() {
  // const [selected, setSelected] = useState("fullStack");

  // const list = [
  //   {
  //     id: "fullStack",
  //     title: "Full-Stack",
  //   },
  //   {
  //     id: "frontEnd",
  //     title: "Front-End",
  //   },
  //   {
  //     id: "backEnd",
  //     title: "Back-End",
  //   },
  // ];
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      {/* <ul>
        {list.map((item) => (
          <ProjectsList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul> */}

      <div className="container">
        <Card className="item card">
          <a
            href="https://jlentz17.github.io/passwordGenerator/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./assets/passwordGenerator.png"
              //   width="250"
              //   height="230"
              alt=""
            />
          </a>
          <h3>Password Generator</h3>
        </Card>
        <Card className="item card">
          <a
            href="https://jlentz17.github.io/code-quiz/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./assets/codingQuizScreenShot.png"
              //   width="250"
              //   height="230"
              alt=""
            />
          </a>
          <h3>Code Quiz</h3>
        </Card>
        <Card className="item card">
          <a
            href="https://jlentz17.github.io/work-day-scheduler"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./assets/workdayScheduler.png"
              //   width="250"
              //   height="230"
              alt=""
            />
          </a>
          <h3>Workday Scheduler</h3>
        </Card>
        <Card className="item card">
          <a
            href="https://jlentz17.github.io/rick-and-morty-app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./assets/rickAndMortyProjectScreenshot.png"
              // width="250"
              // height="230"
              alt=""
            />
          </a>
          <h3>Rick and Morty App</h3>
        </Card>
        <Card className="item card">
          <a
            href="https://secure-forest-24217.herokuapp.com/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./assets/food-guru-homepage.png"
              //   width="250"
              //   height="230"
              alt="food app"
            />
          </a>
          <h3 className="foodGuru">Food Guru Full Stack</h3>
        </Card>
        {/* <div className="item">
          <img
          src="./assets/food-guru-homepage.png"
          //   width="250"
          //   height="230"
          alt=""
          />
          <h3>Food Guru Full-Stack</h3>
        </div> */}
      </div>
    </div>
  );
}
