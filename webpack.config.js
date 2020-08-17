var webpack = require("webpack"),
    UglifyJsPlugin = require("uglifyjs-webpack-plugin"),
    _ = require("lodash"),
    fs = require("fs"),
    path = require("path");

function createBanner() {
    var pkg = JSON.parse(fs.readFileSync("./package.json"));
    return "[name]\n" +
        `${pkg.homepage}\n` +
        `Copyright (c) 2010 - ${new Date().getFullYear()} ${pkg.author.name}\n` +
        `Licensed under the ${pkg.license} license\n` +
        `Version: ${pkg.version}`;
}

var rules = {
    js: {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-modules-commonjs"],
            passPerPreset: true,
        },
    },
    ts: {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /(node_modules)/,
        options: {
            presets: ["@babel/preset-typescript"],
            passPerPreset: true,
        },
    }
};

module.exports = function (env, argv) {
    var config = {
        name: "main",
        entry: {
            "/dist/inputmask.libphonenumber.extensions": "./lib/inputmask.libphonenumber.extensions.js",
            "/dist/inputmask.phone.extensions": "./lib/inputmask.phone.extensions.js",
            "/qunit/qunit": "./qunit/index.js"
        },
        output: {
            path: __dirname,
            filename: "[name].js",
            libraryTarget: "umd"
        },
        externals: {
            "inputmask": "Inputmask",
            "jquery": "jQuery",
            "qunit": "QUnit"
        },
        optimization: {
            minimize: env === "production",
            minimizer: [new UglifyJsPlugin({
                include: /\.min\.js$/,
                sourceMap: env !== "production",
                uglifyOptions: {
                    warnings: "verbose",
                    mangle: false,
                    compress: {
                        keep_fnames: true,
                        unused: false,
                        typeofs: false,
                        dead_code: false,
                        collapse_vars: false
                    },
                    output: {
                        ascii_only: true,
                        beautify: false,
                        comments: /^!/
                    }
                },
                extractComments: false
            }), new UglifyJsPlugin({
                exclude: /\.min\.js$/,
                sourceMap: env !== "production",
                uglifyOptions: {
                    warnings: "verbose",
                    mangle: false,
                    compress: {
                        keep_fnames: true,
                        unused: false,
                        typeofs: false,
                        dead_code: false,
                        collapse_vars: false
                    },
                    output: {
                        ascii_only: true,
                        beautify: true,
                        comments: /^!/
                    }
                },
                extractComments: false
            })]
        },
        module: {
            rules: [
                rules.js,
                rules.ts
            ]
        },
        devtool: "source-map",
        plugins: [
            new webpack.BannerPlugin({
                banner: createBanner,
                entryOnly: true
            })
        ],
        bail: true,
        mode: env === "production" ? "production" : "none"
    };

    return [config];
};
