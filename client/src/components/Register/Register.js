import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";

import styles from "./Register.module.css";
import axios from "axios";
import Login from "../Login/Login";

import { register, login } from "../../api";

const emptyCartSVG = require("../../assets/images/empty_cart.svg");
const avatarSVG = require("../../assets/images/avatar.svg");

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState("false");
  const { setToken } = useContext(AuthContext);

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("Attempting to Register...");
    const data = await register(username, email, password, confirmPassword);
    if (data) {
      const authToken = await login(data.data.email, data.data.password);
      setToken(authToken);
      localStorage.setItem("user", authToken);
      setLoading(false);
    }
  };

  let history = useHistory();

  const handleRegisterClick = () => {
    history.push("/login");
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.img}>
          <img className="empty-cart" src={emptyCartSVG} alt="logo" />
        </div>
        <div className={styles.registerContainer}>
          <form onSubmit={handleRegister}>
            <img className={styles.avatar} src={avatarSVG} alt="avatar" />
            <h2>FamCart</h2>

            <div className={styles.inputDiv}>
              <div className={styles.i}>
                <FontAwesomeIcon icon="user" />
              </div>
              <div>
                <input
                  className={styles.input}
                  type="text"
                  name="username"
                  onChange={updateUsername}
                  placeholder="Username"
                />
              </div>
            </div>

            <div className={styles.inputDiv}>
              <div className={styles.i}>
                <FontAwesomeIcon icon="user" />
              </div>
              <div>
                <input
                  className={styles.input}
                  type="text"
                  name="email"
                  onChange={updateEmail}
                  placeholder="Email"
                />
              </div>
            </div>

            <div className={styles.inputDiv}>
              <div className={styles.i}>
                <FontAwesomeIcon icon="lock" />
              </div>
              <div>
                <input
                  className={styles.input}
                  type="password"
                  name="password"
                  onChange={updatePassword}
                  placeholder="Password"
                />
              </div>
            </div>

            <div className={styles.inputDiv}>
              <div className={styles.i}>
                <FontAwesomeIcon icon="user" />
              </div>
              <div>
                <input
                  className={styles.input}
                  type="text"
                  name="password"
                  onChange={updateConfirmPassword}
                  placeholder="Confirm Password"
                />
              </div>
            </div>

            <button
              className={styles.btn1}
              onClick={handleRegister}
              type="submit"
            >
              Sign Up
            </button>

            <button className={styles.btn2} onClick={handleRegisterClick}>
              Already registered? Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
