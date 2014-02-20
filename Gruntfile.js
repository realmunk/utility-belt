
module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    copy: {
      main: {
        expand: true,
        cwd: 'dev/',
        src: [
          'assets/img/*',
          'src/*'
        ],
        dest: 'prod/',
        filter: 'isFile'
      },
      requirejs: {
        src: 'dev/assets/lib/bower/requirejs/require.js',
        dest: 'prod/assets/lib/require.js'
      }
    },
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
    clean: {
      build: {
        src: ['prod']
      }
    },
    less: {
      build: {
        options: {
          cleancss: true
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
  
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  
  grunt.registerTask('build', ['clean', 'jade', 'less', 'copy', 'concat', 'requirejs']);
};