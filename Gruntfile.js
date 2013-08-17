module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.name %>' +
				' <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				immed: true,
				newcap: true,
				noarg: true,
				sub: true,
				undef: true,
				unused: true,
				boss: true,
				eqnull: true,
				browser: true,
				globals: {
					jQuery: true,
					Markdown: true
				}
			},
			files: 'js/daily.js'
		},
		uglify: {
			options: {
				banner: '<%= banner %>'
			},
			dist: {
				src: 'js/daily.js',
				dest: 'js/daily.min.js'
			}
		},
		markdown: {
			all: {
				files: [
					{
						src: 'data/latest.md',
						dest: 'web/latest.html'
					}
				],
				options: {
					template: 'web/template.html',
					markdownOptions: {
						gfm: true
					}	
				}
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-markdown');
	grunt.registerTask('js', ['jshint', 'uglify']);
	grunt.registerTask('md', ['markdown']);
};