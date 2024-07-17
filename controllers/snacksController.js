const express = require("express");
const snacks = express.Router();
const {
  getAllSnacks,
  getOneSnack,
  createSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks");
const { checkSnack } = require("../validation/checkSnack");
console.log(snacks)

// INDEX
snacks.get("/", async (req, res) => {
  try {
    const allSnacks = await getAllSnacks();
    res.status(200).json(allSnacks);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// SHOW
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const snack = await getOneSnack(id);
    if (snack) {
      res.status(200).json(snack);
    } else {
      res.status(404).json({ error: "Snack not found :(" });
    }
  } catch (error) {
    res.status(505).json({ error: "Internal server error" });
  }
});

// CREATE
snacks.post("/", checkSnack, async (req, res) => {
  try {
    const newSnack = await createSnack(req.body);
    res.status(201).json(newSnack);
  } catch (error) {
    res.status(506).json({ error: "Error creating snack" });
  }
});

// DELETE
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedSnack = await deleteSnack(id);
    if (deletedSnack) {
      res.status(200).json({ message: "Snack successfully deleted" });
    } else {
      res.status(404).json({ error: "Snack not found :(" });
    }
  } catch (error) {
    res.status(507).json({ error: "Error deleting snack" });
  }
});

// UPDATE
snacks.put("/:id", checkSnack, async (req, res) => {
  const { id } = req.params;
  try {
    const updatedSnack = await updateSnack(id, req.body);
    if (updatedSnack) {
      res.status(200).json(updatedSnack);
    } else {
      res.status(404).json({ error: "Snack not found :(" });
    }
  } catch (error) {
    res.status(508).json({ error: "Error updating snack" });
  }
});

module.exports = snacks;
