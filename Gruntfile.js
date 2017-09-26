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
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-mustache-render');
  grunt.loadNpmTasks('grunt-serve');
  grunt.registerTask('default', ['mustache_render', 'copy']);
};
