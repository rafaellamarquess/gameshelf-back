const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: String,
  releaseYear: String,
  imageUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Game', gameSchema);
