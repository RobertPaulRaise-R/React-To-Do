const express = require("express");

const router = express.Router();

// GET ALL TODOS
router.get("/", (req, res) => {
  res.json({
    msg: "Get all todos",
  });
});

// DELETE ALL TODOS
router.delete("/", (req, res) => {
  res.json({
    msg: "Delete all todos",
  });
});

// GET SINGLE WORKOUT
router.get("/:id", (req, res) => {
  res.json({
    msg: "Get single todo",
  });
});

// CREATE A NEW TODO
router.post("/", (req, res) => {
  res.json({
    msg: "Create a new todo",
  });
});

// UPDATE A TODO
router.patch("/:id", (req, res) => {
  res.json({
    msg: "Update a todo",
  });
});

// DELETE SINGLE TODO
router.delete("/:id", (req, res) => {
  res.json({
    msg: "Delect single todo",
  });
});

module.exports = router;
