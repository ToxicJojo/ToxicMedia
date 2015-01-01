var process = require('child_process');

var stopPlayback = function(request, response) {
  var path = App.basePath + '/' + request.query.dir;

  console.log('stopped playing');
  var pB = process.spawn('./sh/stopPlayback.sh', [path], {
    detached: true,
    stdio: ['ignore', 'ignore', 'ignore']
  });
  pB.unref();

  response.json(200, 'ok');
};
module.exports = stopPlayback