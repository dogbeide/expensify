const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const PUBLIC_PATH = path.join(__dirname, 'public');

module.exports = (env) => {
    const isProduction = env === 'production';
    const CSSExtract = new MiniCssExtractPlugin({
        filename: 'styles.css'
    });

    return {
        entry: './src/app.js',
        mode: 'development',
        output: {
            path: PUBLIC_PATH,
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
            contentBase: PUBLIC_PATH,
            historyApiFallback: true
        }
    }
};