import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../Button/Button";
import Card from "../Card/Card";

import "./Dashboard.css";

const handleSubmit = () => {
  console.log("Clicked");
};

const fetchItems = () => {
  const data = axios.get("/http://localhost:3000/api/shoppinglists");
  console.log(data);
};

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState([]);

  useEffect(() => {
    fetchItems();
    return () => {
      console.log("done");
    };
  }, []);

  return (
    <>
      <h1>Dashboard</h1>
      <div className="dashboard-container">
        <Card cardDate={Date.now()} />

        <Card cardDate={Date.now()} />

        <Button buttonText="New Shopping List" onClick={handleSubmit} />
      </div>
    </>
  );
};

export default Dashboard;
