const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: { minimize: true }
            }]
        }, {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        }, {
            test: /\.scss$/,
            use: [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                    sourceMap: true,
                    importLoader: 2
                }
            },
            {
                loader: 'postcss-loader',
                options: {
                    ident: 'postcss',
                    plugins: function() {
                        return [
                            //require('precss'),
                            require('autoprefixer')
                        ];
                    }
                }
            },
            {
                loader: 'sass-loader'
            }]
        }, {
            test: /\.ts$/,
            use: [{
                loader: 'ts-loader'
            }],
            exclude: /node_modules/
        }, {
            test: /\.tsx$/,
            use: [{
                loader: 'ts-loader'
            }],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        }),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css",
        })
    ]
};