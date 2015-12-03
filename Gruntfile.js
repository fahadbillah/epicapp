module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> build <%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			build: {
				src: 'app/src/*.js',
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
				globals: {
					'$': true,
					'angular': true,
					'EpicApp': true,
				},
				reporter: require('jshint-stylish')
			},
			target: ['app/src/**']
		},
		clean: ["dist/"]
	});

	grunt.registerTask('default', ['clean','jshint','uglify','copy','htmlmin']);
};