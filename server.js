var express = require('express'),
  packageJson = require('./package.json'),
  path = require('path'),
  env = process.env.NODE_ENV || 'development';

global.App = {
  app: express(),
  port: 3000,
  env: env,
  version: packageJson.version,
  root: path.join(__dirname, './app'),
  appPath: function(path) {
    return this.root + '/' + path;
  },
  require: function(path) {
    return require(this.appPath(path));
  },
  start: function() {
    if (!this.started) {
      this.started = true;
      App.app.listen(App.port);
      console.log("Running ToxicTimer Version " + App.version + " on port " + App.port + " in " + App.env + " mode");
    }
  }
};

//Jade setup
App.app.set('views', App.appPath("templates"));
App.app.set('view engine', 'jade');
App.app.set('view options', {
  pretty: env === 'development'
});

//Middleware
var staticContent = express.static(App.appPath('../public/build'));
App.app.use(staticContent);

var router = require('./config/router');
App.app.use(router);


App.app.use(function(request, response) {
  response.render('404');
});

App.start();