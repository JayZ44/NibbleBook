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

//INDEX
snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  res.status(200).json(allSnacks);
});
//SHOW
snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getOneSnack(id);
  if (snack.id) {
    res.status(200).json(snack);
  } else {
    res.status(404).json({ error: "snack not found :(." });
  }
});
//CREATE
snacks.post("/new", checkSnack, async (req, res) => {
  const newSnack = await createSnack(req.body);
  res.json(newSnack);
});
//DELETE
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.status(200).json(deletedSnack);
  } else {
    res.status(404).json({ error: "snack not found :(." });
  }
});
//UPDATE
snacks.put("/:id", checkSnack, async (req, res) => {
  const { id } = req.params;
  const updatedSnack = await updateSnack(id, req.body);
  if (updatedSnack.id) {
    res.status(200).json(updatedSnack);
  } else {
    res.status(404).json({ error: "snack not found :(." });
  }
});

module.exports = snacks;
