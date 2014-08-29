var togglePause = function(path, callback) {
  $.ajax({
    type: 'GET',
    url: '/api/video/togglePause',
    processData: true,
    dataType: 'json',
    success: callback
  });
};

module.exports = togglePause;