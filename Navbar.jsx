import React from "react";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      <div className="brand">
        <div className="logo-circle"></div>
        <span className="brand-name">
          Logo <span className="gold-text">Traject</span>
        </span>
      </div>
      <div className="nav-right">
        <span>
          <a href="#" className="white-link">
            Already have an account?
          </a>
        </span>
        <a href="#" className="log-in-btn">
          Log in
        </a>
      </div>
    </nav>
  );
}