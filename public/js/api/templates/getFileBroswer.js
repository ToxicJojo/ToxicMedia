var getFileBroswer = function(path, callback) {
  $.ajax({
    type: 'GET',
    url: '/template/fileBroswer/?dir=' + path,
    processData: true,
    dataType: 'html',
    success: callback
  });
};

module.exports = getFileBroswer;