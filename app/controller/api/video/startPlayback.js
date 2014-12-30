var process = require('child_process');

var startPlayback = function(request, response) {
  console.log('xd');
  var path = request.query.dir;
  var pB = process.spawn('./sh/startPlayback.sh');
  response.json(200, 'ok');
};


module.exports = startPlayback;