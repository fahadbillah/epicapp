'use strict';
module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-ng-annotate');
	grunt.loadNpmTasks('grunt-filerev');
	grunt.loadNpmTasks('grunt-usemin');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		useminPrepare: {
			html: 'app/index.html',
			options: {
				dest: 'dist'
			}
		},
		usemin: {
			html: 'dist/index.html'
		},
		concat: {
			scripts: {
				src: ['app/src/**/*.js'],
				dest: 'dist/src/build.min.js'
			},
			vendors: {
				src: ['bower_components/**/*.min.js'],
				dest: 'dist/src/vendor.min.js'
			}
		},
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> build <%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			script: {
				src: 'dist/src/build.min.js',
				dest: 'dist/src/build.min.js'
			},
			vendor: {
				src: 'dist/src/vendor.min.js',
				dest: 'dist/src/vendor.min.js'
			}
		},
		cssmin: {
			target: {
				files: {
					'dist/style/style.min.css': ['app/style/*.css']
				}
			}
		},
		htmlmin: {
			dist: {                                  
				options: {                                 
					removeComments: true,
					collapseWhitespace: true
				},
				files: [
				{
					expand: true,
					cwd: 'app/',
					src: ['**/*.html'],
					dest: 'dist/',
					ext: '.html',
					extDot: 'first'
				}
				]
			}
		},
		copy: {
			main: {
				files: [
				{
					expand: true,
					cwd: 'app/', 
					src: ['index.html', 'view/**'],
					dest: 'dist/'
				}
				]
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			target: ['GruntFile.js','app/src/']
		},
		ngAnnotate: {
			dist: {
				files: [{
					expand: true,
					cwd: 'dist/src/',
					src: '*.js',
					dest: 'dist/src/'
				}]
			}
		},
		wiredep: {
			app: {
				src: ['app/index.html']
			}
		},
		clean: ["dist/"]
	});

// grunt.registerTask('default', ['clean','wiredep','copy','concat','ngAnnotate','uglify','htmlmin','cssmin']);
grunt.registerTask('default', ['clean','usemin']);
};