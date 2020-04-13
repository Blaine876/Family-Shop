import React from "react";

import { Link } from "react-router-dom";

import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav>
      <h3>Family Shop</h3>
      <ul className="nav-links">
        <Link className="link" to="/dashboard">
          <li>Home</li>
        </Link>

        <Link className="link" to="family">
          <li>Family</li>
        </Link>
        <Link className="link" to="/profile">
          <li className="link"> Profile</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;
