const express = require("express");
const { registerUser, currentUser, loginUser } = require("../controllers/userControlller");
const router = express.Router();

router.post("/register",registerUser);

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;