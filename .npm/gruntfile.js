/*global module: false */
module.exports = function (grunt) {

// Force use of Unix newlines
  grunt.util.linefeed = '\n';

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),

    watch: {
      sass: {
        files: [
          '../sass/**/*.scss'
        ],
        tasks: [
          'sass:dev'
        ]
      },
      css: {
        options: {
          livereload: true
        },
        files: [
          '../css/style.css'
        ]
      }
    },

    // SASS - using libsass - http://sonniesedge.co.uk/blog/using-libsass-library/
    // Compile Sass files (in .scss format) into CSS files
    sass: {
      dev: {
        options: {
          sourceMap: true
        },
        files: {
          '../css/style.css': '../sass/style.scss'
        }
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['*.css', '!*.min.css'],
          dest: 'css',
          ext: '.min.css'
        }]
      }
    }

  });

    // Load the plugins
  require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

  grunt.registerTask('dev', 'Development build', function(args) {
    grunt.task.run([
      'sass:dev',
      'watch'
    ]);
  });

  grunt.registerTask('build', 'Production build', function(args) {
    grunt.task.run([
      'sass:dev',
      'cssmin'
    ]);
  });

    // Default task (Force to development build)
    grunt.registerTask('default', 'dev');
};
