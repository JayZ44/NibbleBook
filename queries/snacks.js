const db = require("../db/dbConfig");

// DATABASE SCHEMA

// ID: INTERGET, PRIMARY KEY
// NAME: TEXT
// ORIGIN: TEXT
// DESCRIPTION: TEXT
// RATING: INT (DEFAULT TO 0??)
// IS_VEGETARIAN: BOOLEAN (DEFAULT)
// DISCOVERED-DATE: DATE/ratingSTAMP
// COMMENTS: TEXT

const getAllSnacks = async () => {
  try {
    const allSnacks = await db.any("SELECT * FROM snacks");
    console.log(allSnacks);
    return allSnacks;
  } catch (error) {
    return error;
  }
};

const getOneSnack = async (id) => {
  try {
    const snack = await db.one(`SELECT * FROM snacks WHERE id = $1`, id);
    return snack;
  } catch (error) {
    return error;
  }
};

const createSnack = async (snack) => {
  try {
    const newSnack = await db.one(
      "INSERT INTO snacks (name, origin ,description ,rating ,is_vegetarian, discovered_date, comments) VALUES ($1, $2 ,$3 ,$4, $5, $6, $7) RETURNING *",
      [
        snack.name,
        snack.origin,
        snack.description,
        snack.rating,
        snack.is_vegetarian,
        snack.discovered_date,
        snack.comments,
      ]
    );
    return newSnack;
  } catch (error) {
    return error;
  }
};

const deleteSnack = async (id) => {
  try {
    const deletedSnack = await db.one(
      `DELETE FROM snacks WHERE id = $1 RETURNING *`,
      id
    );
    return deletedSnack;
  } catch (error) {
    return error;
  }
};

const updateSnack = async (id, snack) => {
  try {
    const {
      name,
      origin,
      description,
      rating,
      is_vegetarian,
      discovered_date,
      comments,
    } = snack;
    const updatedSnack = await db.one(
      "UPDATE snacks SET name=$1, origin=$2, description=$3, rating=$4, is_vegetarian=$5, discovered_date=$6, comments=$7 WHERE id=$8 RETURNING *",
      [
        name,
        origin,
        description,
        rating,
        is_vegetarian,
        discovered_date,
        comments,
        id,
      ]
    );
    return updatedSnack;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllSnacks,
  getOneSnack,
  createSnack,
  deleteSnack,
  updateSnack,
};
