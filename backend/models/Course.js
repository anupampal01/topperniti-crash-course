const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: String,
  overview: String,
  features: [String],
  eligibility: String,
  duration: String,
  price: Number,
  banner: String
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
