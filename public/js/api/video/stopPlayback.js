var stopPlayback = function(path, callback) {
  $.ajax({
    type: 'GET',
    url: '/api/video/stopPlayback',
    processData: true,
    dataType: 'json',
    success: callback
  });
};

module.exports = stopPlayback;