const webpackConfig = require('./webpack.config');

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        clean: ["dist"],
        bump: {
            options: {
                files: ['package.json'],
                updateConfigs: ['pkg'],
                commit: false,
                createTag: false,
                push: false,
                prereleaseName: "beta"
            }
        },
        release: {
            options: {
                bump: false,
                commit: false,
                add: false
            }
        },
        nugetpack: {
            dist: {
                src: function () {
                    return 'nuspecs/Inputmask.phone.nuspec';
                }(),
                dest: 'build/',
                options: {
                    version: '<%= pkg.version %>'
                }
            }
        },
        nugetpush: {
            dist: {
                src: 'build/InputMask.phone.<%= pkg.version %>.nupkg',
                options: {
                    source: "https://www.nuget.org"
                }
            }
        },
        eslint: {
            target: "lib/*.js"
        },
        availabletasks: {
            tasks: {
                options: {
                    filter: 'exclude',
                    tasks: ['availabletasks', 'default', 'updateDistConfig'],
                    showTasks: ['user']
                }
            }
        },
        webpack: {
            main: webpackConfig("production")[0],
        },
        copy: {
            phonecodes: {
                expand: true,
                cwd: 'lib',
                src: 'phone-codes/*',
                dest: 'dist/',
            }
        }
    });

// Load the plugin that provides the tasks.
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('publish', ['release', 'nugetpack', 'nugetpush']);
    grunt.registerTask('publishnext', function () {
        grunt.config('release.options.npmtag', "next");
        grunt.task.run('release');
    });
    grunt.registerTask("validate", ["webpack", "copy", "eslint"]);
    grunt.registerTask("build", ["bump:prerelease", "clean", "webpack", "copy"]);
    grunt.registerTask("build:patch", ["bump:patch", "clean", "webpack", "copy"]);
    grunt.registerTask("build:minor", ["bump:minor", "clean", "webpack", "copy"]);
    grunt.registerTask("build:major", ["bump:major", "clean", "webpack", "copy"]);
    grunt.registerTask("default", ["availabletasks"]);
};
