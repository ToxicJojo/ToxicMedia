var templates = require('./api/templates'),
  util = require('./util'),
  video = require('./api/video');


var bind = function() {
  $('.folder').bind('click', function() {
    var newPath = '?dir=' + util.getParameterByName('dir') + '/' + this.innerHTML;
    window.history.pushState({}, '', '?dir=' + util.getParameterByName('dir') + '/' + this.innerHTML);
    templates.getFileBroswer(util.getParameterByName('dir'),
      function(html) {
        $('#fileBroswer').html(html);
        window.history.pushState({}, '', newPath);
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
    alert(this.dataset.value + ' wird nun abgespielt.');
    video.startPlayback(util.getParameterByName('dir') + '/' + this.dataset.value);
  });

  $('.pauseButton').bind('click', function() {
    video.togglePause();
  });

  $('.stopButton').bind('click', function() {
    video.stopPlayback();
  });

};

$(document).ready(function() {
  bind();
});