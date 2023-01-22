const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    components: [
        'resources/js/components/**/[A-Z]*.vue',
        'resources/js/Layouts/[A-Z]*.vue'
    ],
    require: [
        path.join(__dirname, 'resources/js/styleguide/global.requires.js'),
        path.join(__dirname, 'resources/js/Layouts/Standard.vue')
    ],
    ignore: [
        path.join(__dirname, 'resources/js/components/[A-Z]*.vue'),
        path.join(__dirname, 'resources/js/Layouts/[A-Z]*.vue'),
        // path.join(__dirname, 'resources/js/components/biodynamic-calendar/MonthHeader.vue')
    ],
    webpackConfig: {
        resolve: {
            alias: {
                '@': path.resolve('resources/js'),
            },
        },
        module: {
            rules: [
                // Vectorial loader
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
    }
}
