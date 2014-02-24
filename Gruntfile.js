
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    jade: {
      build: {
        options: {
          data: {
            debug: false,
            pretty: true
          }
        },
        files: {
          'prod/index.html': 'dev/views/index.jade'
        }
      }
    },
    requirejs: {
      build: {
        options: {
          baseUrl: "dev",
          mainConfigFile: "dev/src/ComputasDagen.js",
          name: 'src/UtilityBelt',
          out: "prod/src/UtilityBelt.js"
        }
      }
    },
    less: {
      build: {
        options: {
          pretty: true
        },
        files: [
          { 
            "prod/assets/css/app.css": "dev/assets/less/app.less" 
          }
        ]
      }
    },
    concat: {
      dist: {
        src: ['dev/assets/lib/bower/bootstrap/dist/css/bootstrap.css', 'prod/assets/css/app.css'],
        dest: 'prod/assets/css/app.css',
      }
    },
    watch: {
      options: {
        livereload: true
      },
      livereload: {
        files: ['dev/views/**', 'dev/src/**', 'dev/assets/lib/**', 'dev/assets/img/**'],
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  
  grunt.registerTask('build', ['jade', 'less', 'concat', 'requirejs']);
};