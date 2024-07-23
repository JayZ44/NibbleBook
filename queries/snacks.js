const db = require("../db/dbConfig");

const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any('SELECT * FROM snacks');
    return allSnacks;
  } catch (error) {
    throw error;
  }
};

const getOneSnack = async (id) => {
  try {
    const snack = await db.one('SELECT * FROM snacks WHERE id = $1', id);
    return snack;
  } catch (error) {
    throw error;
  }
};

const createSnack = async (snack) => {
  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, origin, description, rating, is_vegetarian, discovered_date, comments) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        snack.name,
        snack.origin,
        snack.description,
        snack.rating || 0,
        snack.is_vegetarian || false,
        snack.discovered_date,
        snack.comments,
      ]
    );
    return newSnack;
  } catch (error) {
    throw error;
  }
};

const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      'DELETE FROM snacks WHERE id = $1 RETURNING *',
      id
    );
    return deletedSnack;
  } catch (error) {
    throw error;
  }
};

const updateSnack = async (id, snack) => {
  try {
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$1, origin=$2, description=$3, rating=$4, is_vegetarian=$5, discovered_date=$6 comments=$7 WHERE id=$8 RETURNING *",
      [
        snack.name,
        snack.origin,
        snack.description,
        snack.rating,
        snack.is_vegetarian,
        snack.discovered_date,
        snack.comments,
        id,
      ]
    );
    return updatedSnack;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllSnacks,
  getOneSnack,
  createSnack,
  deleteSnack,
  updateSnack,
};
