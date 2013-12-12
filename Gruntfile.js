module.exports = function (grunt) {

    grunt.initConfig({

            pkg: grunt.file.readJSON('package.json'),
            developmentDir: 'src',
            productionDir: 'dist',


            autoprefixer: {
                deploy: {
                    options: {
                        browsers: ['last 2 versions']
                    },
                    files: {
                        './src/css/global.css': './dist/css/global.css'
                    }
                }
            },

            clean: {
                beforeProduction: ['src/css/*.css', 'dist'],
                afterProduction: ['dist/build.txt', 'dist/js/lib/**']
            },

            compass: {
                options: {
                    httpPath: '/',
                    cssDir: 'src/css',
                    sassDir: 'src/sass',
                    imagesDir: 'src/img',
                    javascriptsDir: 'src/js',
                    outputStyle: 'compressed',
                    require: ['breakpoint']
                },
                development: {
                    options: {
                        debugInfo: true,
                        outputStyle: 'expanded',
                        environment: 'development'
                    }
                },
                production: {
                    options: {
                        outputStyle: 'compressed',
                        environment: 'production'
                    }
                }
            },

            connect: {
                server: {
                    options: {
                        base: 'src/',
                        keepalive: true,
                        port: 80
                    }
                }

            },

            copy: {
                production: {
                    cwd: 'src/',
                    files: [
                        {expand: true, src: './src/js/lib/requirejs/require.js', dest: './dist/js/lib/requirejs/', flatten: true}
                    ]
                }
            },

            cssmin: {
                deploy: {
                    options: {
                        keepSpecialComments: 0

                    }, files: {
                        './dist/css/global.css': './dist/css/global.css'
                    }
                }
            },


            htmlmin: {
                dist: {
                    options: {
                        collapseBooleanAttributes: true,
                        removeComments: true,
                        collapseWhitespace: true,
                        removeAttributeQuotes: true,
                        removeRedundantAttributes: true,
                        useShortDoctype: true,
                        removeEmptyAttributes: true,
                        removeOptionalTags: true
                    },
                    files: {
                        './dist/*.html': './dist/*.html'
                    }
                }

            },

            imagemin: {
                png: {
                    options: {
                        optimizationLevel: 7
                    },
                    files: [
                        {
                            expand: true,
                            cwd: './dist//img/',
                            src: ['**/*.png'],
                            dest: './dist/img/',
                            ext: '.png'
                        }
                    ]
                },
                jpg: {
                    options: {
                        progressive: true
                    },
                    files: [
                        {
                            expand: true,
                            cwd: './dist/img/',
                            src: ['**/*.jpg'],
                            dest: './dist/img/',
                            ext: '.jpg'
                        }
                    ]
                }
            },

            jshint: {

                files: ['!Gruntfile.js', 'src/js/**/*.js', '!src/js/lib/**', '!src/js/require*.js'],
                options: {
                    curly: true,
                    eqeqeq: true,
                    immed: true,
                    latedef: true,
                    newcap: true,
                    noarg: true,
                    sub: true,
                    undef: true,
                    boss: true,
                    eqnull: true,
                    browser: true,

                    globals: {
                        // AMD
                        module: true,
                        require: true,
                        requirejs: true,
                        define: true,

                        // Environments
                        console: true,

                        // General Purpose Libraries
                        $: true,
                        jQuery: true,

                        // Testing
                        sinon: true,
                        describe: true,
                        it: true,
                        expect: true,
                        beforeEach: true,
                        afterEach: true
                    }
                }
            },

            manifest: {
                generate: {
                    options: {
                        basePath: './dist',
                        cache: [],
                        network: ['http://*', 'https://*'],
                        fallback: [],
                        exclude: [],
                        preferOnline: true,
                        verbose: true,
                        timestamp: true,
                        hash: true,
                        master: ['index.html']
                    },
                    src: [
                        'css/**',
                        'font/**',
                        'img/**',
                        'js/**'
                    ],
                    dest: './dist/manifest.appcache'
                }
            },


            modernizr: {
                // [REQUIRED] Path to the build you're using for development.
                "devFile": "./src/js/lib/modernizr/modernizr.js",
                // [REQUIRED] Path to save out the built file.
                "outputFile": "./dist/js/lib/modernizr/modernizr.js",
                // Based on default settings on http://modernizr.com/download/
                "extra": {
                    "shiv": true,
                    "printshiv": false,
                    "load": false,
                    "mq": true,
                    "cssclasses": true
                },

                // Based on default settings on http://modernizr.com/download/
                "extensibility": {
                    "addtest": false,
                    "prefixed": false,
                    "teststyles": false,
                    "testprops": false,
                    "testallprops": false,
                    "hasevents": false,
                    "prefixes": false,
                    "domprefixes": false
                },
                // By default, source is uglified before saving
                "uglify": false,
                // Define any tests you want to implicitly include.
                "tests": [],
                // By default, this task will crawl your project for references to Modernizr tests.
                // Set to false to disable.
                "parseFiles": true,

                // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
                // You can override this by defining a "files" array below.
                "files": ['./src/js/**', './src/sass/**', '!./src/js/lib/**' ],

                // When parseFiles = true, matchCommunityTests = true will attempt to
                // match user-contributed tests.
                "matchCommunityTests": false,

                // Have custom Modernizr tests? Add paths to their location here.
                "customTests": []
            },

            requirejs: {
                compile: {
                    options: {
                        appDir: "src",
                        baseUrl: "js",
                        dir: "dist",
                        name: 'main',
                        mainConfigFile: 'src/js/main.js',
                        optimize: "uglify2",
                        optimizeCss: 'none',
                        generateSourceMaps: true,
                        preserveLicenseComments: false,
                        skipDirOptimize: true,
                        fileExclusionRegExp: /^\.|sass/,
                        removeCombined: true,
                        useStrict: false
                    }
                }
            },

            'string-replace': {
                production: {
                    files: {
                        './dist/index.html': './dist/index.html'
                    },
                    options: {
                        replacements: [
                            {
                                pattern: 'src="js/lib/requirejs/require.js"',
                                replacement: 'src="js/require.min.js"'
                            }
                        ]
                    }
                }
            },

            uglify: {
                compress: {
                    './dist/js/require.min.js': ['./src/js/lib/requirejs/require.js']
                }
            },

            validation: {
                options: {
                    path: "./validation-status.json",
                    reportpath: "./validation-report.json",
                    reset: true,
                    stoponerror: true
                },
                files: {
                    src: ['./src/*.html' ]
                }
            },

            watch: {
                options: {
                    livereload: true
                },
                html_and_scripts: {
                    files: ['./src/js/**', '!./src/js/lib/**', './src/*.html']
                },
                sass: {
                    files: ['./src/sass/**'],
                    tasks: 'default'
                }
            }
        }
    );

// Load NPM Tasks
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.loadNpmTasks('grunt-manifest');
    grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-svgmin');

// Default Task
    grunt.registerTask('default', ['compass:development']);

// Development
    grunt.registerTask('server', ['connect']);

// Release Task
    grunt.registerTask('deploy', ['clean:beforeProduction', 'modernizr', 'compass:production', 'validation', 'requirejs', 'imagemin', 'clean:afterProduction', 'uglify', 'autoprefixer', 'cssmin', 'string-replace:production', 'manifest']);


};
