import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav className="Nav">
        <div className="Nav-menu">
          <div className="Nav-brand" />
          <a className="Nav-brand-logo" href="/">
            Instagram
          </a>
        </div>
      </nav>
    );
  }
}

export default Header;
