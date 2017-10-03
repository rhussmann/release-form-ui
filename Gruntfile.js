module.exports = function(grunt) {
  grunt.initConfig({
	  mustache_render: {
	    generate: {
        files: [{
            data: 'src/States.js',
            template: 'templates/basic.mustache',
            dest: 'build/index.html'
        }]
	    }
	  },
    copy: {
      generate: {
        files: [
          {
            src: 'css/*',
            dest: 'build/'
          },
          {
            src: 'script/*',
            dest: 'build/'
          },
          {
            src: 'templates/basic.mustache',
            dest: 'build/basic.mustache'
          },
          {
            src: 'robots.txt',
            dest: 'build/robots.txt'
          }

        ]
      }
    },
    serve: {
      options: {
        serve: {
          path: './build'
        }
      }
    },
    watch: {
      files: ['./css/*', './script/*', './templates/*'],
      tasks: ['mustache_render', 'copy']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mustache-render');
  grunt.loadNpmTasks('grunt-serve');
  grunt.registerTask('default', ['mustache_render', 'copy']);
};
