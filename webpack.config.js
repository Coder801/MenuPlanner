const join = require('path').join;
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
    // entry point for modules can be a map or an array
    entry: [
        'webpack-hot-middleware/client',
        'babel-polyfill',
        join(__dirname, 'src/index')
    ],
    // output file for modules
    output: {
        path: join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    resolve: {
        // aliases for routes e.g. let us write import x from 'src/x' and not relative path '../../src/x'
        alias: {
            'src': join(__dirname, 'src')
        }
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/, plugins: ['transform-runtime'] },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader') },
            { test: /\.scss$/, loader: 'style!css?modules&sourceMap&localIdentName=[local]___[hash:base64:5]!resolve-url!sass?outputStyle=expanded&sourceMap' },
            {
                test: /\.(ttf|eot|woff|woff2|png|ico|jpg|jpeg|gif|svg)$/i,
                loaders: [ `file?context=./&name=assets/static/[ext]/[name].[ext]` ]
            }
        ]
    },
    plugins: [
        // Livetime reload modules
        new webpack.HotModuleReplacementPlugin(),
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
        new ExtractTextPlugin('bundle.css', {disable: process.env.NODE_ENV !== 'production'})
    ],
    // creates source map for our code
    devtool: 'cheap-module-eval-source-map',
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
