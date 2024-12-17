const User = require("../models/user.schema");

// User Signup
const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Server Error" });
  }
};

// User Login
const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.json({ message: "Logged in successfully" });
  } else {
    res.status(401).json({ error: "Invalid username or password" });
  }
};

// Get All Users
const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Delete User
const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
};

module.exports = { signup, login, getAllUsers, deleteUser };
