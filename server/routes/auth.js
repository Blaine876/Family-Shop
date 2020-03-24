const router = require("express").Router();
const User = require("../model/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { registerValidation, loginValidation } = require("../validation");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //Check if email exists
  const emailExists = await User.findOne({ email: req.body.email });

  if (emailExists) {
    return res.status(400).send("Email already exists");
  }

  // Hash password

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword
  });
  try {
    const savedUser = await user.save();
    res.send(savedUser);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);

  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await User.findOne({ email: req.body.email });
  //Check if email exists
  if (!user) {
    return res.status(400).send("Email not found");
  }

  //Checks if password exists
  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword) {
    return res.status(400).send("Invalid Password");
  }

  //Create and assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
  res.send("Logged In");
});

module.exports = router;
