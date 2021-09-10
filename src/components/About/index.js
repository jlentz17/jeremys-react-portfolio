import React from "react";
import coverImage from "../../assets/cover/background-img-portfolio.jpeg"

function About() {
  return (
    <section className="my-5">
      <h1 id="about">Hey, I'm Jeremy!</h1>
      <img src={coverImage} className="my-2" style={{ width: "100%"}} alt="cover photo"/>
    </section>
  );
}

export default About;
