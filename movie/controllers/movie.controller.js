const Movie = require("../models/movie.schema");

// Add a Movie
const addMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(400).json({ error: "All fields are required" });
  }
};

// Update Movie
const updateMovie = async (req, res) => {
  const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(movie);
};

// Delete Movie
const deleteMovie = async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Movie deleted" });
};

// Add Rating
const addRating = async (req, res) => {
  const {rating} = req.body;
  if (rating<0 || rating>10){
    return res.status(400).json({ error: "Rating must be between 0 and 10" });  // Check if rating is within range 0-10
  } 
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).json({ error: "Movie not found" });
  movie.ratings.push({ value: rating });
  await movie.save();
  res.json(movie);
};

// Add Comment
const addComment = async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  if (!movie) return res.status(404).json({ error: "Movie not found" });
  movie.comments.push({ text: req.body.text });
  await movie.save();
  res.json(movie);
};

// Filter Movies
const filterMovies = async (req, res) => {
  const query = req.query;
  const movies = await Movie.find(query);
  res.json(movies);
};

module.exports = { addMovie, updateMovie, deleteMovie, addRating, addComment, filterMovies };
