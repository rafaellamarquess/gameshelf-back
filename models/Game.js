const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  platform: String,
  genre: String,
  releaseYear: Number,
  imageUrl: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Game', gameSchema);
