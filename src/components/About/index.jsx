import React from "react";
import coverImage from "../../assets/cover/background-img-portfolio.jpeg";

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Hey, I'm Jeremy!</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "100%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          Full-Stack developer with a background in business and
          sales. Employees troubleshooting skills, and an eye for detail in the
          pursuit of developing engaging apps. Works well both independently and
          in a team environment. Passionate, flexible and an excellent
          communicator eager to learn.
        </p>
      </div>
    </section>
  );
}

export default About;
