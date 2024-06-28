const express = require("express");
const router = express();
const taskController = require("../Controller/task");

router.post("/add-task", taskController.addTask);
router.get("/show-task", taskController.showtask);
router.put("/update-task/:id", taskController.updateTask);
router.delete("/delete-task/:id", taskController.deleteTask);

module.exports = router;
