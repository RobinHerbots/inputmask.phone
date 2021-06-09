var webpack = require("webpack"),
    terserPlugin = require("terser-webpack-plugin"),
    _ = require("lodash"),
    fs = require("fs");

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
            minimizer: [new terserPlugin({
                include: /\.min\.js$/,
                terserOptions: {
                    sourceMap: env !== "production",
                    format: {
                        ascii_only: true,
                        beautify: false,
                        comments: /^!/
                    }
                },
                extractComments: false
            }), new terserPlugin({
                exclude: /\.min\.js$/,
                terserOptions: {
                    sourceMap: env !== "production",
                    format: {
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
