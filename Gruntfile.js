module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',

		// File concatenations
		concat: {
			// Adds the reset style sheet to the front of my main CSS file
			css: {
				files: {
					'styles/daily.css': [
						'styles/reset/cssreset-min.css', 
						'styles/daily.css'
					]
				}
			},
			// Merges the components into the main MD file
			md: {
				files: {
					'content/main.md': [
						'content/main/head.md',
						'content/dailies/latest.md',
						'content/main/foot.md',
						'content/main/refs.md'
					]
				}
			},
			// A temp. file for the RSS generator task below
			for_rss: {
				files: {
					'feed/latest.temp.md': [
						'content/dailies/latest.md',
						'content/main/refs.md'
					]
				}
			}
		},

		// File deletions
		clean: {
			temp_md: ['feed/latest.temp.md']
		},

		// Generating the CSS file(s)
		sass: {
			main: {
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
				// I've disabled this for now; it generates lots of errors by default
				// src: ['styles/daily.css']
			}
		},

		// Generating the JavaScript file(s)
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
			main: {
				files: {
					'js/daily.min.js': ['js/daily.js']
				}
			}
		},

		// Generating the RSS feed XML file
		markdown: {
			rss: {
				files: {
					'feed/rss.xml': ['feed/latest.temp.md']
				},
				options: {
					template: 'feed/template.xml',
					templateContext: {
						time: (new Date).toString()
					},
					preCompile: function (src) {
						return src
								.replace(/\[@(\w+)\]\(\)/g, '[@$1](http://twitter.com/$1)')
								.replace(/\/img\//g, 'http://webplatformdaily.org/img/');
					},
					postCompile: function (src) {
						var template = grunt.file.read('feed/item_template.xml');

						return src.split('<h2>').slice(1).map(function (val) {
							var title = val.match(/(.+)<\/h2>/)[1],
								id = 'http://webplatformdaily.org/#' + escape(title.replace(/[ ,]/g, ''));

							return grunt.template.process(template, {
								data: {
									title: title,
									id: id,
									val: val
								}
							});
						}).join('');
					},
					markdownOptions: {
						gfm: true
					}	
				}
			}
		},

		// Local server with live-reload
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
			js: {
				files: ['js/daily.js'],
				tasks: ['js']
			},
			md: {
				files: ['content/*/*.md'],
				tasks: ['md']
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
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('css', ['sass', 'csslint', 'concat:css']);
	grunt.registerTask('js', ['jshint', 'uglify']);
	grunt.registerTask('md', ['concat:md']);
	grunt.registerTask('rss', ['concat:for_rss', 'markdown:rss', 'clean:temp_md']);
	grunt.registerTask('server', ['connect', 'watch']);
};