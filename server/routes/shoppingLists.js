const router = require("express").Router();
const ShoppingList = require("../model/ShoppingList");
const verify = require("../validateToken");
//const User = require("../model/User");

router.post("/list", verify, async (req, res) => {
  const shoppinglist = new ShoppingList({
    name: req.body.name,
    description: req.body.description,
    quantity: req.body.quantity,
    image: req.body.image
  });

  try {
    const savedShoppingList = await shoppinglist.save();
    res.send(savedShoppingList);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", (req, res) => {
  ShoppingList.find()
    .exec()
    .then(doc => {
      res.status(200).send(doc);
    })
    .catch(err => {
      res.status(401).send({ message: `Error fetching shopping lists ${err}` });
    });
});

module.exports = router;
