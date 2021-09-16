import React from "react";
import "./nav.scss"

function Nav() {
  return (
    <header className="nav">
      <h2>
        <a href="/">
          <span id="name-logo" role="img" aria-label="logo">
            Jeremy Lentz
          </span>
        </a>
      </h2>
    </header>
  );
}

export default Nav;
