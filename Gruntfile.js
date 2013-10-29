module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');
  // grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-blanket');

  // Project configuration.
  grunt.initConfig({
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        strict: false,
        laxcomma: true,
        globals: {
          describe: false,
          it: false,
          suite: false,
          test: false,
          before: false,
          after: false
        }
      },
      all: {
        src: ['Gruntfile.js', 'app.js', 'controllers/**/*.js', 'lib/**/*.js', 'models/**/*.js', 'test/**/*.js']
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: []
        },
        src: ['test/**/*.js']
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'mochaTest']);
};