module.exports = function(grunt) {
	'use strict';
	
	// recall tasks modules
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');

	// initialize configuration
	grunt.initConfig({
		jade: {
			dist: {
				options: {
					pretty: true
				},
				files: [{
					expand: true,
					cwd: '.',
					src: ['**/*.jade', '!**/_*.jade'],
					dest: 'assets/',
					ext: '.ext.html',
					extDot: 'last'
				}]
			},
			distExt: {
				options: {
					pretty: true
				},
				files: [{
					expand: true,
					cwd: '.',
					src: ['**/*.jade', '!**/_*.jade'],
					dest: 'www/',
					ext: '.ext.html',
					extDot: 'last'
				}]
			}
		},
		sass: {
			dist: {
				options: {
					sourcemap: 'none',
					style: 'compressed'
				},
				files: [{
					expand: true,
					cwd: 'assets/sass',
					src: ['**/*.sass', '!**/_*.sass'],
					dest: 'www/assets/css/',
					ext: '.css',
					extDot: 'first'
				}]
			},
			distExt: {
				options: {
					sourcemap: 'none',
					style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: 'assets/sass',
					src: ['**/*.sass', '!**/_*.sass'],
					dest: 'www/assets/css/',
					ext: '.ext.css',
					extDot: 'first'
				}]
			}
		},
		uglify: {
			options: {
				beautify: false,
				report: 'gzip'
			},
			dist: {
				files: {
					'assets/js/main.min.js': ['assets/js/main.js']
				}
			}
		},
		concat: {
			dist: {
				files: {
					'www/assets/js/main.js': [
						'assets/tools/bower/jquery/dist/jquery.min.js', 
						'assets/tools/bower/bootstrap/dist/js/bootstrap.min.js', 
						'assets/js/main.min.js'
					],
				}
			},
			distExt: {
				files: {
					'www/assets/js/main.ext.js': [
						'assets/tools/bower/jquery/dist/jquery.min.js', 
						'assets/tools/bower/bootstrap/dist/js/bootstrap.min.js', 
						'assets/js/main.js'
					],
				}
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
        			collapseWhitespace: true
				},
				files: {
					'www/index.html': 'www/index.ext.html'
				}
			}
		},
		
		watch: {
			sassfile: {
				files: ['**/*.sass'],
				tasks: ['sass']
			},
			jadefile: {
				files: ['**/*.jade'],
				tasks: ['jade']
			},
			jsUglFile: {
				files: ['assets/js/main.js'],
				tasks: ['uglify']
			},
			jsBuildFile: {
				files: ['assets/js/main.min.js'],
				tasks: ['concat']
			},
			htmlFile: {
				files: ['www/index.ext.html'],
				tasks: ['htmlmin']
			}
		},
		browserSync: {
		    dev: {
		        bsFiles: {
		            src : [
						'www/*.html',
						'www/assets/css/*.css',
						'assets/js/main.js'
					]
		        }
		    },
			options: {
				watchTask: true,
				server: './www'
			}
		}
	});

	// taskrunner
	grunt.registerTask('gen', ['jade', 'sass', 'uglify', 'concat', 'htmlmin']);
	grunt.registerTask('default', ['browserSync', 'watch']);
};
