var express = require('express'),
  router = express.Router();

router.use('/video', App.require('router/api/video'));

module.exports = router;