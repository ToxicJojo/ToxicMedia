var express = require('express'),
  startPlaybackController = App.require('controller/api/video/startPlayback'),
  stopPlaybackController = App.require('controller/api/video/stopPlayback'),
  togglePauseController = App.require('controller/api/video/togglePause'),
  router = express.Router();

router.get('/startPlayback', startPlaybackController);
router.get('/stopPlayback', stopPlaybackController);
router.get('/togglePause', togglePauseController);

module.exports = router;