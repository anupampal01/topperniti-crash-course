const Video = require('../models/Video');

exports.getVideos = async (req, res) => {
  const videos = await Video.find();
  res.json(videos);
};

exports.addVideo = async (req, res) => {
  const video = new Video(req.body);
  await video.save();
  res.status(201).json(video);
};
