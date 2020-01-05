module.exports = function() {
    return {
        shouldUseEntryHTML: false,
        polyfills: null,
        output: {
            globalObject: "this",
            libraryTarget: "umd",
            library: "evaljs2"
        },
        assest: {
            js: {
                name: "index.js",
                output: ""
            }
        },
        // target: "node",
        optimization: {
            runtimeChunk: false,
            splitChunks: false
        },
        babel: {
            useBuiltIns: false,
            modules: "cjs"
        }
    };
};