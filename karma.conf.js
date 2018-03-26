module.exports = function(config) {
    config.set({
        basePath: '',


        frameworks: ['jasmine'],

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'dist/flash.js',
            'test/*_test.js'
        ],

        exclude: [],

        preprocessors: {
            'src/*.js': ['coverage']
        },

        // babelPreprocessor: {
        //     options: {
        //         presets: ['es2015'],
        //         sourceMap: 'inline'
        //     },
        //     filename: function(file) {
        //         return file.originalPath.replace(/\.js$/, '.es5.js');
        //     },
        //     sourceFileName: function(file) {
        //         return file.originalPath;
        //     }
        // },


        reporters: ['progress', 'coverage'],

        coverageReporter: {
          type : 'html',
          dir : 'coverage/'
        },

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        autoWatch: true,

        browsers: ['Chrome'],

        singleRun: false,

        concurrency: Infinity
    })
};
