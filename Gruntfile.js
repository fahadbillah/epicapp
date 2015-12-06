'use strict';
module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-wiredep');
	grunt.loadNpmTasks('grunt-file-creator');
	grunt.loadNpmTasks('grunt-ng-annotate');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			allJs: {
				src: ['app/src/**/*js'],
				dest: 'dist/src/build.min.js'
			}
		},
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> build <%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			build: {
				src: 'dist/src/build.min.js',
				dest: 'dist/src/build.min.js'
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
		'file-creator': {
			options: {
				openFlags: 'w'
			},
			basic: {
				'dist/src/build.min.js': function(fs, fd, done) {
					fs.writeSync(fd, '');
					done();
				}
			}
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

grunt.registerTask('default', ['clean','wiredep','copy','file-creator','concat','ngAnnotate','uglify','htmlmin']);
};