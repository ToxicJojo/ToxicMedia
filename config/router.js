var express = require('express'),
  router = express.Router();

router.use('/', App.require('router/home'));
router.use('/template', App.require('router/singleTemplate'));
router.use('/api', App.require('router/api'));

module.exports = router;