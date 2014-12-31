var express = require('express'),
  startPlaybackController = App.require('controller/api/video/startPlayback'),
  togglePauseController = App.require('controller/api/video/togglePause'),
  router = express.Router();

router.get('/startPlayback', startPlaybackController);
router.get('/togglePause', togglePauseController);

module.exports = router;