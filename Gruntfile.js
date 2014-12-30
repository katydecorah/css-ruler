module.exports = function(grunt) {

  grunt.initConfig({
    haml: {                              // Task
      dist: {                            // Target
        files: {                         // Dictionary of files
          'text.html': 'index.haml'      // 'destination': 'source'
        }
      }
    }
  });


  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-haml2html');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['haml']);

};
