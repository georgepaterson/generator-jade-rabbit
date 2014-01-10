/*global describe, beforeEach, it*/
'use strict';

var path    = require('path');
var helpers = require('yeoman-generator').test;


describe('jade-rabbit generator', function () {
    beforeEach(function (done) {
        helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
            if (err) {
                return done(err);
            }

            this.app = helpers.createGenerator('jade-rabbit:app', [
                '../../app', [
                helpers.createDummyGenerator(),
                'mocha:app'
              ]
            ]);
            done();
        }.bind(this));
    });
    
    it('the generator can be required without throwing', function () {
      // not testing the actual run of generators yet
      this.app = require('../app');
    });

    it('creates expected files', function (done) {
        var expected = [
            // add files you expect to exist here.
            '.jshintrc',
            '.editorconfig'
        ];

        helpers.mockPrompt(this.app, {
            features: ['modernizr']
        });
        this.app.options['skip-install'] = true;
        this.app.run({}, function () {
            helpers.assertFiles(expected);
            done();
        });
    });
});
