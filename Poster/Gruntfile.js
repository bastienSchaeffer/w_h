module.exports = function (grunt) {


	// Project configuration.
	grunt.initConfig({
		pkg        : grunt.file.readJSON('package.json'),
		// COMPASS ===================================/
	   	compass:
		{
			options:
			{
				require: ['compass-normalize', 'susy'],
				outputStyle: 'expanded',
				sassDir: './styles/sass',
				imagesDir: './img',
				httpPath: "/",
				relativeAssets: true
			},
			dev:
			{
				options:
				{
					outputStyle: 'expanded',
					cssDir: './styles/'
				}
			},
			build:
			{
				options:
				{
					outputStyle: 'compressed',
					cssDir: './styles/'
				}
			}

		},
		watch      : {  
			'default': {
				files: ['./styles/sass/{,*/}*.{scss,sass}'],
				tasks: ['compass:dev'],
				options: {
					livereload: true
				}
			},
			production:{
				files: ['./styles/sass/{,*/}*.{scss,sass}'],
				tasks: ['compass:build'],
				options: {
					livereload: true
				}
			}
		},
	});

    grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('default', [
		'compass:dev',
		'watch:default'
	]);

	grunt.registerTask('cssbuild', [
		'compass:build',
		'watch:cssbuild'
	]);
};
