var process = require('child_process');
var sanitize = require("sanitize-filename");

var startPlayback = function(request, response) {
  var path = App.basePath + '/' + request.query.dir;
  console.log(path + ' starts playing');
  var pB = process.spawn('./sh/startPlayback.sh', [path],  {
   detached: true,
   stdio: [ 'ignore', 'ignore', 'ignore' ]
 });
 pb.unref();
  response.json(200, 'ok');
};

var escapeshell = function(cmd) {
  return '"'+cmd.replace(/(["\s'$`\\])/g,'\\$1')+'"';
};

module.exports = startPlayback;
