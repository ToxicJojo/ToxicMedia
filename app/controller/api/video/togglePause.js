var process = require('child_process');

var togglePause = function(request, response) {
  console.log('toggle pause');
  var pB = process.spawn('./sh/togglePause.sh', [], {
    detached: true,
    stdio: ['ignore', 'ignore', 'ignore']
  });
  pB.unref();

  response.json(200, 'ok');
};

module.exports = togglePause;