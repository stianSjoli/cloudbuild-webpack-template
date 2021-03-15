const path = require('path');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    mode:'production',
    module: {
        rules: [
            {
                test:/\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/\.(css)$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
};
