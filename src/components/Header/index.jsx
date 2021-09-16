import React from "react";
import "./header.scss"

function Header() {
  return (
    <header className="header">
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

export default Header;
