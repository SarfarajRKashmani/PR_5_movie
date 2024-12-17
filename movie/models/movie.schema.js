const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  releaseDate: String,
  category: String,
  actors: [{ name: String }],
  image: String,
  ratings: [{ value: { type: Number, min: 0, max: 10 } }],
  comments: [{ text: String }],
  addedBy: String,
});

module.exports = mongoose.model("Movie", MovieSchema);
