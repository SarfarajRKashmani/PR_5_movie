const express = require("express");
const {
  addMovie,
  updateMovie,
  deleteMovie,
  addRating,
  addComment,
  filterMovies,
} = require("../controllers/movie.controller");

const router = express.Router();

router.post("/create", addMovie);
router.patch("/update/:id", updateMovie);
router.delete("/delete/:id", deleteMovie);
router.patch("/rating/:id", addRating);
router.patch("/comment/:id", addComment);
router.get("/filter", filterMovies);

module.exports = router;
