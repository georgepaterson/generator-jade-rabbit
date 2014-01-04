'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var JadeRabbitGenerator = module.exports = function JadeRabbitGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'] });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(JadeRabbitGenerator, yeoman.generators.Base);

JadeRabbitGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [{
    type: 'checkbox',
    name: 'features',
    message: 'What more would you like?',
    choices: [{
      name: 'Modernizr',
      value: 'modernizr',
      checked: true
      
    }, {
      name: 'Bootstrap with LESS',
      value: 'bootstrap',
      checked: true
    }]
  }];

  this.prompt(prompts, function (props) {
    var features = props.features;

    function hasFeature(feat) {
      return features.indexOf(feat) !== -1; 
    }

    this.bootstrap = hasFeature('bootstrap');
    this.modernizr = hasFeature('modernizr');
    
    cb();
  }.bind(this));
};

JadeRabbitGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};

JadeRabbitGenerator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};

JadeRabbitGenerator.prototype.git = function git() {
  this.copy('gitignore', '.gitignore');
  this.copy('gitattributes', '.gitattributes');
};

JadeRabbitGenerator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};

JadeRabbitGenerator.prototype.jshint = function jshint() {
  this.copy('jshintrc', '.jshintrc');
};

JadeRabbitGenerator.prototype.editorConfig = function editorConfig() {
  this.copy('editorconfig', '.editorconfig');
};

JadeRabbitGenerator.prototype.writeHead = function writeIndex() {
  this.headFile = this.readFileAsString(path.join(this.sourceRoot(), 'head.jade'));
  this.headFile = this.engine(this.headFile, this);
};

JadeRabbitGenerator.prototype.writeBootstrap = function writeIndex() {
  this.bootstrapFile = this.readFileAsString(path.join(this.sourceRoot(), 'bootstrap.jade'));
  this.bootstrapFile = this.engine(this.bootstrapFile, this);
};

JadeRabbitGenerator.prototype.writeScripts = function writeIndex() {
  this.scriptsFile = this.readFileAsString(path.join(this.sourceRoot(), 'scripts.jade'));
  this.scriptsFile = this.engine(this.scriptsFile, this);
};

JadeRabbitGenerator.prototype.writeLess = function lessIndex() {
  this.lessFile = this.readFileAsString(path.join(this.sourceRoot(), 'main.less'));
  this.lessFile = this.engine(this.lessFile, this);
};

JadeRabbitGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/scripts');
  this.mkdir('app/styles');
  this.mkdir('app/img');
  this.mkdir('app/modules');
  
  this.copy('index.jade', 'app/index.jade');
  this.write('app/modules/head.jade', this.headFile);
  this.write('app/modules/bootstrap.jade', this.bootstrapFile);
  this.write('app/modules/scripts.jade', this.scriptsFile);
  this.write('app/styles/main.less', this.lessFile);

  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
};

JadeRabbitGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};
