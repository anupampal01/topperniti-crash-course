const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  studentName: String,
  course: String,
  message: String,
  photoUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Testimonial', testimonialSchema);
