var fs = require('fs');

var show = function(request, response) {
  var dir = '/home/jojo/Documents' + request.query.dir;
  console.log(dir);

  fs.readdir(dir, function(error, files) {

    var finalFiles = [];

    for (var i = 0; i < files.length; i++) {
      var file = {};

      file.name = files[i];

      if (fs.statSync(dir + '/' + file.name).isDirectory()) {
        file.type = 'folder';
      } else {
        file.type = file.name.split('.').pop();
      }
      finalFiles[i] = file;
    }


    var params = {
      page_title: 'ToxicMedia',
      dir: '/lib/data',
      folder_structure: dir.split('/'),
      files: finalFiles
    };

    App.require('views/singleTemplate').show(request, response, params, 'home/filebroswer');

  });

};

module.exports.show = show;