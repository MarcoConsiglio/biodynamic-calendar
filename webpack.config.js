const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    resolve: {
        alias: {
            '@': path.resolve('resources/js'),
        },
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                use: ['babel-loader', 'vue-svg-loader'],
            },
            // Vue loader
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            // Style loader
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            // Images loader
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            // Fonts loader
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]
    },
    plugins: [
        // add vue-loader plugin
        new VueLoaderPlugin()
    ]
};
