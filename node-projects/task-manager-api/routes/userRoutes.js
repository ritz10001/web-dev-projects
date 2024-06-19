const express = require("express");
const {registerUser, loginUser, currentUser, deleteUser} = require("../controllers/userController");
const router = express.Router();
const validateToken = require("../middleware/validateToken");

//REGISTER USER
router.route("/register").post(registerUser);

//LOGIN USER
router.route("/login").post(loginUser);

//GET CURRENT USER INFO
router.get("/current", validateToken, currentUser);
//DELETE USER
router.route("/:id").delete(deleteUser);

module.exports = router;