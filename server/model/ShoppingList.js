const mongoose = require("mongoose");

const shoppingListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  quantity: {
    type: Number,
    required: true
  },
  image: {
    type: String
  }
});

module.exports = mongoose.model("ShoppingList", shoppingListSchema);
