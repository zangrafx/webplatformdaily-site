module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['*.js']
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %>' +
						' <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			dist: {
				src: 'js/daily.js',
				dest: 'js/daily.min.js'
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.registerTask('default', ['jshint', 'uglify']);
};