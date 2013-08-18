module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.name %>' +
				' <%= grunt.template.today("yyyy-mm-dd") %> */\n',
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'styles/daily.css': 'styles/daily.sass'
				}
			}
		},
		csslint: {
			strict: {
				// src: ['styles/daily.css'] // disabled by default
			}
		},
		concat: {
			dist: {
				src: ['styles/reset/cssreset-min.css', 'styles/daily.css'],
				dest: 'styles/daily.css'
			}
		},
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
		},
		connect: {
			server: {
				options: {
					port: 9001
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			css: {
				files: ['styles/daily.sass'],
				tasks: ['css']
			},
			scripts: {
				files: ['js/daily.js'],
				tasks: ['js']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-csslint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-markdown');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('css', ['sass', 'csslint', 'concat']);
	grunt.registerTask('js', ['jshint', 'uglify']);
	grunt.registerTask('md', ['markdown']);
	grunt.registerTask('server', ['connect', 'watch']);
};