module.exports = function(grunt) {
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> build <%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			build: {
				src: 'app/src/*.js',
				dest: 'dist/src/<%= pkg.name %>.min.js'
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
					src: ['app/**/*.html'],
					dist: 'dist/',
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
					src: ['index.html'],
					dest: 'dist/',
				},
				{
					expand: true,
					cwd: 'app/', 
					src: ['view/'],
					dest: 'dist/',
				}
				]
			}
		}
	});

	grunt.registerTask('default', ['uglify','copy']);
	
};