const express = require("express");
const { getTasks, getTaskByID, createTask, updateTask, deleteTask } = require("../controllers/taskController");
const idValidator = require("../middleware/validIdChecker");
const validateToken = require("../middleware/validateToken");
const router = express.Router();


router.use(validateToken);
//GET ALL TASKS route
router.route("/").get(getTasks);

//CREATE A NEW TASK
router.route("/").post(createTask);

//UPDATE A TASK
router.put("/:id", idValidator, updateTask);

//GET TASK BY ID
router.get("/:id", idValidator, getTaskByID);

//DELETE TASK
router.delete("/:id", idValidator, deleteTask);

module.exports = router;