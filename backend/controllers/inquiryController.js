const Inquiry = require('../models/Inquiry');

exports.submitInquiry = async (req, res) => {
  const inquiry = new Inquiry(req.body);
  await inquiry.save();
  res.status(201).json({ message: 'Inquiry submitted successfully!' });
};
exports.getInquiries = async (req, res) => {
  const inquiries = await Inquiry.find();
  res.json(inquiries);
};