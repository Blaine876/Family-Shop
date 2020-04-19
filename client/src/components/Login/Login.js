import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";

import { login } from "../../api";

import axios from "axios";

import Button from "../Button/Button";

import "./Login.css";

const fullCartSVG = require("../../assets/images/full_cart.svg");
const avatarSVG = require("../../assets/images/avatar.svg");

library.add(faUser, faLock);

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setToken } = useContext(AuthContext);

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const authToken = await login(email, password);
    if (authToken !== "") {
      setToken(authToken);
      localStorage.setItem("user", authToken);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  let history = useHistory();

  const handleRegisterClick = ({ location }) => {
    history.push("/register");
  };

  return (
    <div className="container">
      <div className="img">
        <img className="empty-cart" src={fullCartSVG} alt="logo" />
      </div>
      <div className="login-container">
        <form onSubmit={handleLogin}>
          <img className="avatar" src={avatarSVG} alt="avatar" />
          <h2>FamCart</h2>
          <div className="input-div one">
            <div className="i">
              <FontAwesomeIcon icon="user" />
            </div>
            <div>
              <input
                className="input"
                type="text"
                name="email"
                onChange={updateEmail}
                placeholder="Email"
              />
            </div>
          </div>

          <div className="input-div two">
            <div className="i">
              <FontAwesomeIcon icon="lock" />
            </div>
            <div>
              <input
                className="input"
                type="password"
                name="password"
                onChange={updatePassword}
                placeholder="Password"
              />
            </div>
          </div>
          <a href="#">Forgot Password?</a>
          <button className="btn" onClick={handleLogin} type="submit">
            Log In
          </button>

          <button className="btn" onClick={handleRegisterClick}>
            No account? Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
