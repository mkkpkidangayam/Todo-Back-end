const taskSchema = require("../Model/taskSchema");

const addTask = async (req, res) => {
  const { task } = req.body;
  try {
    const newTask = await taskSchema.create({ task: task });

    res.status(200).json({
      message: "New task added",
      task: newTask,
    });
  } catch (error) {
    console.error("Internal server error", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const showtask = async (req, res) => {
  try {
    const task = await taskSchema.find();
    res.status(200).json(task);
  } catch (error) {
    console.error("Internal server error", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { updatedTask } = req.body;
  try {
    const task = await taskSchema.findByIdAndUpdate(
      id,
      {
        task: updatedTask,
      },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({
        message: "Task not found",
      });
    }
    res.status(200).json({
      message: "Task updated",
      task,
    });
  } catch (error) {
    console.error("Internal server error", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await taskSchema.findByIdAndDelete(id);
    res.status(200).json({
      message: "Task deleted",
    });
  } catch (error) {
    console.error("Internal server error", error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { addTask, showtask, updateTask, deleteTask };
