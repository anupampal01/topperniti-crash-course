const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  message: String,
  course: String
}, { timestamps: true });

module.exports = mongoose.model('Inquiry', inquirySchema);
