import React, { useState, useEffect, useContext } from "react";
import Button from "../Button/Button";
import Card from "../Card/Card";

import axios from "axios";

import { useHistory } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import "./Dashboard.css";

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState([]);
  const { checkAuth, token, setToken } = useContext(AuthContext);

  const history = useHistory();

  useEffect(() => {
    checkAuth();
  }, [token]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/shoppinglists")
      .then((res) => {
        //console.log(res);
        setItems(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setToken("");
    console.log("User has been logged out");
  };

  const handleSubmit = () => {
    history.push("/addshoppinglist");
  };

  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard-container">
        <Card cardDate={Date.now()} />

        <Card
          cardItems={items.map((item) => (
            <li className="item-list" key={item._id}>
              {item.name}
            </li>
          ))}
          cardDate={Date.now()}
          cardQuanties={items.map((item) => (
            <li className="item-list">{item.quantity}</li>
          ))}
        />
      </div>
      <div className="add-button">
        <Button buttonText="New Shopping List" onClick={handleSubmit} />
      </div>

      <Button onClick={handleLogout} buttonText="Logout" />
    </>
  );
};

export default Dashboard;
