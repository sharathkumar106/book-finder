let folder = __dirname;
import path from 'path';
export const entry = ['./app/index.js'];
export const output = {
    path: folder + '/build/',
    filename: 'bundle.js'
};
export const module = {
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
};
export const devServer = {
    port: 3000,
    contentBase: folder + '/build/',
    inline: true
};