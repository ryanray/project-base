module.exports = function(grunt) {

  var BASE_TARGET_DIR = '../public/';
  var MAIN_CSS = BASE_TARGET_DIR + 'css/main.css';
  var MAIN_CSS_MIN = BASE_TARGET_DIR + 'css/main.min.css';
  var SITE_JS = BASE_TARGET_DIR + 'js/site.js';
  var SITE_JS_MIN = BASE_TARGET_DIR + 'js/site.min.js';

  // Project configuration.
  grunt.initConfig({
	  less: {
	    master: {
	      watchList: ['less/*.less','less/components/*.less','less/base/*.less','less/features/*.less'],
	      src: ['less/main.less'],
	      dest: MAIN_CSS
	    },
	    master_min: {
	      watchList: '<config:less.master.watchList>',
	      src: '<config:less.master.src>',
	      dest: MAIN_CSS_MIN,
	      options: {
	      	yuicompress: true
	      }
	    }
	},
	concat: {
    siteJS: {
      src: ['js/lib/*.js','js/plugins/*.js','js/features/*.js','js/init.js'],
      dest: SITE_JS_MIN
    }
  },
  min: {
  	siteJS: {
			src: SITE_JS_MIN,
    	dest: SITE_JS_MIN
  	}
  },
	watch: {
    	less: {
    		files: '<config:less.master.watchList>',
    		tasks: 'less'
    	},
    	scripts: {
    		files: '<config:concat.siteJS.src>',
    		tasks: 'concat'
    	}
    }
  });

  // Default task.
  grunt.registerTask('default', 'less concat min');

  //This task is a multi task, meaning that grunt will automatically iterate over all less targets if a target is not specified.
  grunt.loadNpmTasks('grunt-less');

};
