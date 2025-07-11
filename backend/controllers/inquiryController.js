const Inquiry = require('../models/Inquiry');

exports.submitInquiry = async (req, res) => {
  const inquiry = new Inquiry(req.body);
  await inquiry.save();
  res.status(201).json({ message: 'Inquiry submitted successfully!' });
};
