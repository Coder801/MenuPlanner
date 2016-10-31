const join = require('path').join;
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    // entry point for modules can be a map or an array
    entry: join(__dirname, 'src/app.js'),
    // output file for modules
    output: { path: join(__dirname, 'build'), filename: 'bundle.js' },
    resolve: {
        // aliases for routes e.g. let us write import x from 'src/x' and not relative path '../../src/x'
        alias: {
            'src': join(__dirname, 'src')
        }
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css-loader!postcss-loader') },
            { test: /\.scss$/, loader: 'style!css?modules&sourceMap&localIdentName=[local]___[hash:base64:5]!resolve-url!sass?outputStyle=expanded&sourceMap' },
            {
                test: /\.(ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif|svg)$/i,
                loaders: [ `file?context=./&name=assets/static/[ext]/[name].[ext]` ]
            }
        ]
    },
    plugins: [
        // HtmlPlugin create index.html in build/ . It uses ./src/index.html as a template and injects all generated files
        new HtmlPlugin({
            filename: 'index.html',
            template: './src/index.html',
            inject: true
        }),
        // ProvidePlugin make auto-import whenever those modules used
        new webpack.ProvidePlugin({
            _: "lodash",
            'React': 'react',
            'ReactDOM': 'react-dom'
        }),
        // Extracts all imported .css files to one bundle.css file
        new ExtractTextPlugin('bundle.css')
    ],
    // creates source map for our code
    devtool: 'inline-source-map',
    devServer: {
        host: 'localhost',
        port: 8080,
        contentBase: join(__dirname, 'build'),
        watchOptions: {
            aggregateTimeout: 300,
            hot: true,
            poll: 1000
        }
    },
    'postcss': [
        autoprefixer({
            browsers: [
                'last 3 versions',
                'iOS >= 7',
                'Android >= 4',
                'Explorer >= 11',
                'ExplorerMobile >= 11'
            ],
            cascade: false
        })
    ]
};
