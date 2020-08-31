const path = require("path");
const fs = require("fs");
//const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin") ;

// Webpack entry points. Mapping from resulting bundle name to the source file entry.
const entries = path.resolve("src/index.tsx");

// Loop through subfolders in the "Samples" folder and add an entry for each one
const samplesDir = path.join(__dirname, "src");
fs.readdirSync(samplesDir).filter(dir => {
    if (fs.statSync(path.join(samplesDir, dir)).isDirectory()) {
        entries[dir] = "./" + path.relative(process.cwd(), path.join(samplesDir, dir, dir));
    }
});

module.exports = {
    entry: entries,
    output: {
        path: path.join(__dirname, "/dist"), 
        filename: "[name]/[name].js"
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        alias: {
            "azure-devops-extension-sdk": path.resolve("node_modules/azure-devops-extension-sdk")
        },
    },
    devtool: "source-map",
    stats: {
        warnings: false
    },
    module: {
        rules: [
            { 
                test: /\.tsx?$/, 
                loader: "ts-loader" 
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "azure-devops-ui/buildScripts/css-variables-loader", "sass-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.woff$/,
                use: [{
                    loader: 'base64-inline-loader'
                }]
            }
        ]
    },
    plugins: [
        //new CopyWebpackPlugin([ { from: "**/*.html", context: "src" }]),
        new HtmlWebpackPlugin({
            template: "./src/index.html"  // Specify the HTML template to use
          })
    ]
};