import React, { useState } from "react";

const AddShoppingList = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [description, setDescription] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const updateDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAddToList = () => {
    console.log(`Added`);
  };

  return (
    <div>
      <h2>Add To Shopping List</h2>
      <form onSubmit={handleAddToList}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" value={name} onChange={updateName} />
        <label htmlFor="quantity">Quantity</label>
        <input
          type="number"
          name="quantity"
          value={quantity}
          onChange={updateQuantity}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          value={description}
          onChange={updateDescription}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddShoppingList;
