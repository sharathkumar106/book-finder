let folder = __dirname;
module.exports = {
    entry: ['./app/index.js'],
    output: {
        path: folder + '/build/',
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            }
        ]
    },
    devServer: {
        port: 3000,
        contentBase: folder + '/build/',
        inline: true
    }
}