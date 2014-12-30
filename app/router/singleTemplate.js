var express = require('express'),
  router = express.Router();

router.get('/fileBroswer', App.require('controller/singleTemplate/fileBroswer').show);

module.exports = router;