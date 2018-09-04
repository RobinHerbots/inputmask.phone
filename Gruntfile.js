module.exports = function (grunt) {
    function createBanner(fileName) {
        return "/*!\n" +
            "* " + fileName + "\n" +
            "* <%= pkg.homepage %>\n" +
            "* Copyright (c) 2010 - <%= grunt.template.today('yyyy') %> <%= pkg.author.name %>\n" +
            "* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)\n" +
            "* Version: <%= pkg.version %>\n" +
            "*/\n";
    }

    function createUglifyConfig(path) {
        var uglifyConfig = {};
        var srcFiles = grunt.file.expand(path + "/**/*.js");
        for (var srcNdx in srcFiles) {
            var dstFile = srcFiles[srcNdx].replace("js/", ""),
                dstFileMin = dstFile.replace(".js", ".min.js");
            uglifyConfig[dstFile] = {
                dest: 'dist/inputmask.phone/' + dstFile,
                src: srcFiles[srcNdx],
                options: {
                    banner: createBanner(dstFile),
                    beautify: true,
                    mangle: false,
                    compress: false,
                    preserveComments: false,
                    ASCIIOnly: true
                }
            };
            uglifyConfig[dstFileMin] = {
                dest: "dist/min/inputmask.phone/" + dstFileMin,
                src: srcFiles[srcNdx],
                options: {
                    banner: createBanner(dstFileMin),
                    mangle: false,
                    compress: false,
                    preserveComments: false,
                    ASCIIOnly: true
                }
            };
        }

        return uglifyConfig;
    }

// Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        uglify: createUglifyConfig("js"),
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
        // nugetpack: {
        //     dist: {
        //         src: function () {
        //             return 'nuspecs/Inputmask.phone.nuspec';
        //         }(),
        //         dest: 'build/',
        //         options: {
        //             version: '<%= pkg.version %>'
        //         }
        //     }
        // },
        // nugetpush: {
        //     dist: {
        //         src: 'build/InputMask.phone.<%= pkg.version %>.nupkg',
        //         options: {
        //             source: "https://www.nuget.org"
        //         }
        //     }
        // },
        eslint: {
            target: "{extra/*,js}/*.js"
        },
        availabletasks: {
            tasks: {
                options: {
                    filter: 'exclude',
                    tasks: ['availabletasks', 'default', 'updateDistConfig'],
                    showTasks: ['user']
                }
            }
        }
    });

// Load the plugin that provides the tasks.
    require('load-grunt-tasks')(grunt);

    grunt.registerTask('publish', ['release']);
    grunt.registerTask('publishnext', function () {
        grunt.config('release.options.npmtag', "next");
        grunt.task.run('release');
    });
    grunt.registerTask('build', ['bump:prerelease', 'clean', 'uglify']);
    grunt.registerTask('build:patch', ['bump:patch', 'clean', 'uglify']);
    grunt.registerTask('build:minor', ['bump:minor', 'clean', 'uglify']);
    grunt.registerTask('build:major', ['bump:major', 'clean', 'uglify']);
    grunt.registerTask('default', ["availabletasks"]);
};
