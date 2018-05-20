const path = require('path');


const PUBLIC_PATH = path.join(__dirname, 'public');


module.exports = (env) => {
    const isProduction = env === 'production';

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
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: PUBLIC_PATH,
            historyApiFallback: true
        }
    }
};