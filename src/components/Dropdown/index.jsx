import React from "react";
import "./dropdown.scss";

export default function Dropdown({hamburgerOpen, setHamburgerOpen}) {
  return (
    <div className={"dropdown "+(hamburgerOpen && "active")}>
      <ul>
        <li onClick={()=>setHamburgerOpen(false)}>
          <a href="#about">Home</a>
        </li>
        <li onClick={()=>setHamburgerOpen(false)}>
          <a href="#projectsList">About</a>
        </li>
        <li onClick={()=>setHamburgerOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={()=>setHamburgerOpen(false)}>
          <a href="#contactForm">Contact</a>
        </li>
      </ul>
    </div>
  );
}
