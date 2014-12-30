var express = require('express'),
  startPlaybackController = App.require('controller/api/video/startPlayback'),
  router = express.Router();

router.get('/startPlayback', startPlaybackController);

module.exports = router;