import React, { useState, useEffect } from "react";
import Button from "../Button/Button";

import "./Form.css";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    console.log(
      console.log(`${username}, ${email}, ${password} ${confirmPassword}`)
    );
  };

  return (
    <>
      <h1>Family Shop</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <p>E-mail</p>

          <input
            type="text"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <p>Password</p>

          <input
            type="text"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <p>Confirm Password</p>

          <input
            type="text"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />

          <Button buttonText="Log In" />
        </form>
      </div>
    </>
  );
};

export default Form;
