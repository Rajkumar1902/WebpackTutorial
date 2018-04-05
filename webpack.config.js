var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
   filename: 'main.css'
});

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        // publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ],
                exclude:  path.resolve(__dirname, 'src/index.html'),
            }
        ]
    },
    plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),

        //option1: using the HtmlWebpackPlugin when you have multiple html files.
        //this will import bundle.js into users.html as well.
       /* new HtmlWebpackPlugin({
            filename: 'users.html',
            template: 'src/users.html'
        }),*/

       //with chunks option we do not import any bundles into users.html
       /* new HtmlWebpackPlugin({
            filename: 'users.html',
            template: 'src/users.html',
            chunks:[]
        }),*/

       //if you want to inject any bundles into users.html
        /*new HtmlWebpackPlugin({
            filename: 'users.html',
            template: 'src/users.html',
            chunks:['app']
        }),*/

        //option2: importing the users.html file in app.js just like importing main.scss file and
        // use file loader in this config file.

        new CleanWebpackPlugin(['dist'])
    ]
};