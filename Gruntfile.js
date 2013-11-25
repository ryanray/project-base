module.exports = function(grunt) {

  //TODO: uglify JS

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-less');
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
    less: {
      production: {
        options: {
          // paths: ["assets/css"],
          cleancss: true
        },
        files: {
          "public/css/site.min.css": "FED/less/main.less"
        }
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
      less: {
        files: 'FED/less/**/*.less',
        tasks: ['compileCSS']
      },
      scripts: {
        files: '<%= src.all %>',
        tasks: ['default']
      }
    }
  });

  grunt.registerTask('compileCSS', ['less']);

  grunt.registerTask('compileTemplates', ['jade', 'uglify']);
  // Default task.
  grunt.registerTask('default', ['jshint', 'mochaTest', 'jade', 'less']);
};