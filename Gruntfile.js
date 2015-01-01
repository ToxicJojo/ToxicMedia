module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    browserify: {
      'public/build/js/main.js': ['public/js/main.js'],
      'public/build/js/util.js': ['public/js/util.js'],
      'public/build/js/api/templates.js': ['public/js/api/templates.js'],
      'public/build/js/api/templates/getFileBroswer.js': ['public/js/api/templates/getFileBroswer.js'],
      'public/build/js/api/video.js': ['public/js/api/video.js'],
      'public/build/js/api/video/startPlayback.js': ['public/js/api/video/startPlayback.js'],
      'public/build/js/api/video/stopPlayback.js': ['public/js/api/video/stopPlayback.js'],
      'public/build/js/api/video/togglePause.js': ['public/js/api/video/togglePause.js'],
    },
    uglify: {},
    cssmin: {
      minify: {
        expand: true,
        cwd: 'public/css/',
        src: ['*.css'],
        dest: 'public/build/css/'
      }
    },
    watch: {
      files: ["public/js/**/*.js", 'public/css/**/*.css'],
      tasks: ['browserify', 'cssmin']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserify', 'cssmin']);
};