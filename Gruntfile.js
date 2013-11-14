module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');

  // Project configuration.
  grunt.initConfig({
    src: {
      all: ['Gruntfile.js', 'app.js', 'controllers/**/*.js', 'lib/**/*.js', 'models/**/*.js', 'test/**/*.js']
    },
    jade: {
      client: {
        options: {
          client: true,
          compileDebug: false,
          amd: false
        },
        files: {
          "public/js/templates/templates.js": "views/**/*.jade"
        }
      }
    },
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
        src: '<%= src.all %>'
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
    },
    watch: {
      scripts: {
        files: '<%= src.all %>',
        tasks: ['default']
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['jshint', 'mochaTest', 'jade']);
};