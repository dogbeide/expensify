const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const publicPath = path.join(__dirname, 'public');
const publicPathDist = path.join(publicPath, 'dist');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new MiniCssExtractPlugin({
        filename: 'styles.css'
    });

    return {
        entry: './src/app.js',
        mode: 'development',
        output: {
            path: publicPathDist,
            filename: 'bundle.js'
        },
        module: {
            rules: [{
                loader: 'babel-loader',
                test: /\.jsx?$/,
                exclude: /node_modules/
            }, {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            }]
        },
        plugins: [
            CSSExtract
        ],
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: publicPath,
            historyApiFallback: true,
            publicPath: '/dist/'
        }
    }
};