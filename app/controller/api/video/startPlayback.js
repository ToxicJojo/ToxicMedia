var process = require('child_process');

var startPlayback = function(request, response) {
  var path = App.basePath + '/' + request.query.dir;

  console.log(path + ' starts playing');
  var pB = process.spawn('./sh/startPlayback.sh', [path], {
    detached: true,
    stdio: ['ignore', 'ignore', 'ignore']
  });
  pB.unref();

  response.json(200, 'ok');
};
module.exports = startPlayback;