var startPlayback = function(path, callback) {
  $.ajax({
    type: 'GET',
    url: '/api/video/startPlayback?dir=' + path,
    processData: true,
    dataType: 'json',
    success: callback
  });
};

module.exports = startPlayback;