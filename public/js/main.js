var templates = require('./api/templates'),
  util = require('./util'),
  video = require('./api/video');


var bind = function() {
  $('.folder').bind('click', function() {
    window.history.pushState({}, '', '?dir=' + util.getParameterByName('dir') + '/' + this.innerHTML);
    templates.getFileBroswer(util.getParameterByName('dir'),
      function(html) {
        $('#fileBroswer').html(html);
        bind();
      }
    );
  });

  $('.folderPath').bind('click', function() {
    window.history.pushState({}, '', '?dir=' + this.dataset.value);
    templates.getFileBroswer(util.getParameterByName('dir'),
      function(html) {
        $('#fileBroswer').html(html);
        bind();
      }
    );
  });

  $('.playButton').bind('click', function() {
    alert();
    video.startPlayback(util.getParameterByName('dir') + '/' + this.dataset.value);
  });

};

$(document).ready(function() {
  bind();
});