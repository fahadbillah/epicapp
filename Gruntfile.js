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
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		useminPrepare: {
			html: 'app/index.html',
			options: {
				dest: 'dist',
				flow: {
					steps: { 
						js: ['concat', 'uglify'], 
						css: ['concat', 'cssmin'] 
					}, 
					post: {} 
				}
			}
		},
		usemin: {
			html: 'dist/index.html'
		},
		filerev: {
			dist: {
					//
				src: ['dist/src/{,*/}*.js','dist/style/{,*/}*.css']
			}
		},
		concat: {
			vendors: {
				src: ['bower_components/**/*.min.js'],
				dest: 'dist/src/vendor.min.js'
			},
			scripts: {
				src: ['app/src/**/*.js'],
				dest: 'dist/src/build.min.js'
			}
		},
		uglify: {
			options: {
				mangle: false,
				banner: '/* <%= pkg.name %> build <%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			vendor: {
				src: ['dist/src/vendor.min.js'],
				dest: 'dist/src/vendor.min.js'
			},
			script: {
				src: ['dist/src/build.min.js'],
				dest: 'dist/src/build.min.js'
			}
		},
		cssmin: {
			target: {
				files: {
					'dist/style/style.min.css': ['app/style/*.css'],
					'dist/style/vendor.min.css': ['bower_components/**/*.css'],
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
					cwd: 'dist/',
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
		clean: {
			start: ['dist/'],
			end: ['.tmp']
		},
		requirejs: {
			compile: {
				options: {
					appDir: '',
					baseUrl: 'app/src/',
					dir: 'dist/src/',
					mainConfigFile: 'app/src/app.js',
					module: [
					{
						name: 'EpicApp'
					}
					],
					findNestedDependancies: true
				}
			}
		}
	});

	//
	grunt.registerTask('default', ['clean:start','copy','requirejs','htmlmin']);
	


	// grunt.registerTask('default', ['clean:start','wiredep','copy','useminPrepare','concat','ngAnnotate','uglify','cssmin','filerev','usemin','htmlmin','clean:end']);
};