const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: String,
  url: String,
  thumbnail: String,
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Video', videoSchema);
