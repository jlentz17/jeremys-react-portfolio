import React from "react";
import "./header.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

function Header({ hamburgerOpen, setHamburgerOpen }) {
  return (
    <div className={"header " + (hamburgerOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#about" className="logo">
            jeremy..
          </a>
          <div className="infoContainer">
            <PhoneIphoneIcon />
            <span>(480) 955-6012</span>
          </div>
          <div className="infoContainer">
            <a href="http://github.com/jlentz17" target="_blank" rel="noreferrer">
              <GitHubIcon />
            </a>
            <span>jlentz17@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div
            className="hamburgerMenu"
            onClick={() => setHamburgerOpen(!hamburgerOpen)}
          >
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
