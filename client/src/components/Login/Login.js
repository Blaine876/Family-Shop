import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import axios from "axios";

import Button from "../Button/Button";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { setToken } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  const login = async (email, password) => {
    setLoading(true);

    await axios
      .post("http://localhost:3000/api/user/login", { email, password })
      .then((res) => {
        const authToken = res.data;
        setToken(authToken);
        localStorage.setItem("user", authToken);
        setLoading(false);
      })
      .catch((err) => {
        console.log(`Error logging in: ${err}`);
        setLoading(false);
      });
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h2>Login Screen</h2>
      <form onSubmit={handleLogin}>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" onChange={updateEmail} />
        <label htmlFor="password">Password</label>
        <input type="text" name="password" onChange={updatePassword} />
        <Button
          type="submit"
          buttonText="Log In"
          onClick={handleLogin}
          disabled={loading}
        />
        {loading ? "Loading..." : "Login"}
      </form>
    </div>
  );
};

export default Login;
