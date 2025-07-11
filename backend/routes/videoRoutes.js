const express = require('express');
const router = express.Router();
const videoController = require('../controllers/videoController');

router.get('/', videoController.getVideos);
router.post('/', videoController.addVideo);

module.exports = router;
