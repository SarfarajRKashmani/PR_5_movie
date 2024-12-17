const express = require("express");
const { signup, login, getAllUsers, deleteUser } = require("../controllers/user.controller");
const { missingFields, validateLogin } = require("../middlewares/user.middleware");

const router = express.Router();

router.post("/signup", missingFields, signup);
router.post("/login", validateLogin, login);
router.get("/", getAllUsers);
router.delete("/delete/:id", deleteUser);

module.exports = router;
