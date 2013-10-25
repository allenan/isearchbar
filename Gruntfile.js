module.exports = function(grunt) {

  grunt.initConfig({

    pkg: grunt.file.readJSON("isearchbar.jquery.json"),

    meta: {
      banner: "/*\n" +
        " *  <%= pkg.title || pkg.name %> - v<%= pkg.version %>\n" +
        " *  <%= pkg.description %>\n" +
        " *  <%= pkg.homepage %>\n" +
        " *\n" +
        " *  Made by <%= pkg.author.name %>\n" +
        " *  Under <%= pkg.licenses[0].type %> License\n" +
        " */\n"
    },

    uglify: {
      my_target: {
        src: ["dist/js/jquery.isearchbar.js"],
        dest: "dist/js/jquery.isearchbar.min.js"
      }
    },

    coffeelint: {
      app: ["src/js/*.coffee"]
    },

    coffee: {
      compile: {
        files: {
          "dist/js/jquery.isearchbar.js": "src/js/jquery.isearchbar.coffee"
        }
      }
    },

    sass: {
      dist: {
        files: {
          "dist/css/jquery.isearchbar.css": "src/css/jquery.isearchbar.scss"
        },
        options: {
          'style': 'compact'
        }
      }
    },

    cssmin: {
      minify: {
        expand: true,
        cwd: 'dist/css/',
        src: ['jquery.isearchbar.css'],
        dest: 'dist/css/',
        ext: '.isearchbar.min.css'
      }
    },

    usebanner: {
      dist: {
        options: {
          position: 'top',
          banner: "<%= meta.banner %>"
        },
        files: {
          src: [
            'dist/css/jquery.isearchbar.css',
            'dist/css/jquery.isearchbar.min.css',
            'dist/js/jquery.isearchbar.js',
            'dist/js/jquery.isearchbar.min.js'
          ]
        }
      }
    },

    concat: {
      readme: {
        files: {
          'README.md': ['PROJECT.md', 'CONTRIBUTING.md', 'HISTORY.md']
        }
      }
    }
    // watch: {
    //   scripts: {
    //     files: ['dist/js/*.js', 'dist/css/*.css'],
    //     tasks: ['default'],
    //     options: {
    //       spawn: false,
    //     },
    //   },
    // },  
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-coffeelint');
  grunt.loadNpmTasks("grunt-contrib-coffee");
  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-banner");

  grunt.registerTask("default", ["coffeelint", "coffee", "sass", "uglify", "cssmin", "usebanner", "concat"]);
  grunt.registerTask("watch", ["watch"]);
  grunt.registerTask("travis", ["coffeelint"]);

};
