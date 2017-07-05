"use strict"
const path = require("path");

module.exports = {
    entry:[path.resolve(__dirname,"src/main")],
    output:{
        filename:"main.bundle.js",
        path:path.resolve(__dirname,"build")
    },
    resolve:{
        alias:{
            vue:"vue/dist/vue.js"
        }
    },
    module:{
        rules:[
            {test:/\.(png|jpg|gif)$/,loader:"url-loader?limit=8192&name=images[hash:8].[name].[ext]"},
            {test:/\.(eot|svg|ttf|woff|woff2)$/,loader:"url-loader"},
            {test:/\.css$/,loader:"style-loader!css-loader"},
            {test:/\.scss$/,loader:"style-loader!css-loader!sass-loader"},
            {test:/\.vue$/,loader:"vue-loader",exclude:/node_modules/,include:/src/},
            {test:/\.js$/,loader:"babel-loader",query:{presets:["es2015","stage-1"]},exclude:/node_modules/,include:/src/}
        ]
    }
}