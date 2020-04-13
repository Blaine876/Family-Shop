import React, { useState, useEffect } from "react";

import "./Register.css";

const Regiter = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(
      `Ateempting to register with username: ${username} and password: ${password}`
    );
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />

          <p>Email</p>
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

          <label>Confirm Password</label>
          <input
            type="text"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
          />

          <input type="submit" value="log in" />
        </form>
      </div>
    </>
  );
};

export default Regiter;
