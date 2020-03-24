const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Importing routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");
const shoppingListsRoute = require("./routes/shoppingLists");

require("dotenv").config();

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to Database");
  }
);

//Middleware
app.use(express.json());

//Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/posts", postRoute);
app.use("/api/shoppinglists", shoppingListsRoute);

const port = 3000;

app.listen(port, () => {
  console.log(`Server up and running on http://localhost:${port}`);
});
