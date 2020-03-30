import React from "react";

import { Link } from "react-router-dom";

import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <nav>
      <h3>Family Shop</h3>
      <ul className="nav-links">
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="family">
          <li>Family</li>
        </Link>
        <Link to="/profile">
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
};

export default NavigationBar;
