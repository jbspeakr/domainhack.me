/*global module:false*/
var swPrecache = require('sw-precache');
var path = require('path');

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    swprecache: {
      dist: {
        handleFetch: true
      }
    },
    pkg: {
      name: 'domainhack'
    },
    // Task configuration.
    clean : {
      options: {
        force: true
      },
      dist: [
        'dist/'
      ]
    },
    concat: {
      dist: {
        src: [
          'js/app.js',
          'js/controller.js',
          'js/data.js',
          'js/domainhack-builder.js'
        ],
        dest: 'dist/<%= pkg.name %>.concat.js'
      }
    },
    uglify: {
      dist: {
        src: '<%= concat.dist.dest %>',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
      dist: {
        files: {
          'dist/main.min.css': 'css/main.css'
        }
      }
    },
    filerev: {
      options: {
        algorithm: 'md5',
        length: 8,
        context: {
          revision: '<%= meta.revision %>'
        }
      },
      dist: {
        src: [
          '<%= uglify.dist.dest %>',
          'dist/main.min.css'
        ]
      }
    },
    injector: {
      options: {
        addRootSlash: false,
        template: 'index.template.html'
      },
      dist: {
        files: {
          'dist/index.injected.html': [
            'dist/domainhack.min.*.js',
            'dist/main.min.*.css'
          ]
        }
      }
    },
    htmlmin: {
      html: {
        options: {
          removeComments: true,
          collapseWhitespace: true,
          keepClosingSlash: true
        },
        files: {
          'index.html': 'dist/index.injected.html'
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-injector');
  grunt.loadNpmTasks('grunt-git-revision');

  function writeServiceWorkerFile(rootDir, handleFetch, callback) {
    var config = {
      cacheId: 'domainhack',
      // If handleFetch is false (i.e. because this is called from swPrecache:dev), then
      // the service worker will precache resources but won't actually serve them.
      // This allows you to test precaching behavior without worry about the cache preventing your
      // local changes from being picked up during the development cycle.
      handleFetch: handleFetch,
      logger: grunt.log.writeln,
      runtimeCaching: [{
        urlPattern: /\.googleapis\.com\//,
        handler: 'cacheFirst',
        options: {
          cache: {
            name: 'google-cache',
          }
        }
      }, {
        urlPattern: /\.gstatic\.com\//,
        handler: 'cacheFirst',
        options: {
          cache: {
            name: 'fonts-cache',
          }
        }
      }, {
        urlPattern: /\.bootstrapcdn\.com\//,
        handler: 'cacheFirst',
        options: {
          cache: {
            name: 'bootstrap-cache',
          }
        }
      }],
      staticFileGlobs: [
        'index.html',
        'dist/**.min.**.js',
        'dist/**.min.**.css',
        'img/**'
      ],
      // verbose defaults to false, but for the purposes of this demo, log more.
      verbose: true
    };

    swPrecache.write('service-worker.js', config, callback);
  };

  grunt.registerMultiTask('swprecache', function() {
    var done = this.async();
    var handleFetch = this.data.handleFetch;

    writeServiceWorkerFile(handleFetch, function(error) {
      if (error) {
        grunt.fail.warn(error);
      }
      done();
    });
  });

  // Default task.
  grunt.registerTask('release',
    ['clean', 'concat', 'uglify', 'cssmin', 'revision', 'filerev', 'injector', 'htmlmin']);

};
