import React, { useState } from "react";
import ProjectsList from "../ProjectsList";
import "./projects.scss";
import { Card } from "@material-ui/core";

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
          <img
            src="./assets/passwordGenerator.png"
            //   width="250"
            //   height="230"
            alt=""
          />
          <button>
            Password Generator
            <a
              href="https://jlentz17.github.io/passwordGenerator/"
              target="_blank"
            ></a>
          </button>
        </Card>
        <Card className="item card">
          <img
            src="./assets/codingQuizScreenshot.png"
            //   width="250"
            //   height="230"
            alt=""
          />
          <button>
            Code Quiz
            <a href="https://github.com/jlentz17/code-quiz" taget="_blank"></a>
          </button>
        </Card>
        <Card className="item card">
          <img
            src="./assets/workdayScheduler.png"
            //   width="250"
            //   height="230"
            alt=""
          />
          <button>
            Workday Scheduler
            <a
              href="https://jlentz17.github.io/work-day-scheduler"
              target="_blank"
            ></a>
          </button>
        </Card>
        <Card className="item card">
          <img
            src="./assets/rickAndMortyProjectScreenshot.png"
            // width="250"
            // height="230"
            alt=""
          />
          <button>
            Rick and Morty App
            <a
              href="https://github.com/jlentz17/rick-and-morty-app"
              target="_blank"
            ></a>
          </button>
        </Card>
        <Card className="item card">
          <img
            src="./assets/food-guru-homepage.png"
            //   width="250"
            //   height="230"
            alt=""
          />
          <button>
            Food Guru Full-Stack
            <a href="https://github.com/jlentz17/food-guru" target="_blank"></a>
          </button>
        </Card>
        <div className="item">
          <img
            src="./assets/food-guru-homepage.png"
            //   width="250"
            //   height="230"
            alt=""
          />
          <h3>Food Guru Full-Stack</h3>
        </div>
      </div>
    </div>
  );
}
