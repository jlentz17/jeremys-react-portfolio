import React from "react";
import "./header.scss";
// import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
// import GitHubIcon from '@mui/icons-material/GitHub';

function Header() {
  return (
    <div className="header">
      <div className="wrapper">
        <div className="left">
          <a href="#about" className="logo">jeremy..</a>
          <div className="infoContainer">
            {/* <PhoneAndroidIcon className="icon"/> */}
            <span>(480) 955-6012</span>
          </div>
          <div className="infoContainer">
            {/* <GitHubIcon className="icon"/> */}
            <span>jlentz17@gmail.com</span>
          </div>
        </div>

        <div className="right">
          <div className="hamburgerMenu">
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
