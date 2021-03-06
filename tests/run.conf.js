// Karma configuration
// Generated on Tue Oct 22 2013 12:07:18 GMT+0200 (Romance Daylight Time)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'http://code.jquery.com/jquery-1.10.2.min.js',
      'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular.min.js',
      'angular-mocks.js',
      'helpers.js',
      '../src/pitControls/utils.js',
      '../src/pitControls/namespaces.js',
      '../src/pitControls/**.js',
      '../src/pitControls/services/*.js',
      '../src/pitControls/directives/**.js',
      './**/**.spec.js'
    ],


    // list of files to exclude
    exclude: [
      '**/**.conf.js'
    ],


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],//, 'coverage'],

    // coverageReporter: {
    //   type : 'html',
    //   dir : 'coverage/'
    // },

    // preprocessors: {
    //   // source files, that you wanna generate coverage for
    //   // do not include tests or libraries
    //   // (these files will be instrumented by Istanbul)
    //   '../src/pitControls/**/*.js': ['coverage']
    // },

    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    //autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['Chrome'],


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
