import React from "react";
import "./header.scss";
import GitHubIcon from "@material-ui/icons/GitHub";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";

function Header({ hamburgerOpen, setHamburgerOpen }) {
  return (
    <div className={"header " +(hamburgerOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#about" className="logo">
            jeremy..
          </a>
          <div className="infoContainer">
            <PhoneIphoneIcon />
            <span>
              <a href="tel:4809556012">Call Me: (480) 955-6012</a>
            </span>
          </div>
          <div className="infoContainer">
            <a href="http://github.com/jlentz17" target="_blank" rel="noreferrer">
              <GitHubIcon /> &nbsp;Check out my Commits!
            </a>
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
