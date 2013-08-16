module.exports = function (grunt) {
	grunt.initConfig({
		jshint: {
			all: ['*.js']
		},
		uglify: {
			dist: {
				src: 'js/daily.js';
				dest: 'js/daily.min.js'
			},
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['uglify']);
};