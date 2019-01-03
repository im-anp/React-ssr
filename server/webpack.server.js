const path = require('path');

module.exports = {
    // Inform webpack that we are buiding a bundle for node js , rather then for the browser

    target: 'node',
    // Tell webpack the root file of our server application

    entry:'./src/index.js',

    //tell webpack where to put the output file that is generated

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // Tell Webpack to run bebel on every file it run through

    module:{
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_module/,
                options: {
                    presets: [
                        'react',
                        'stage-0',
                        ['env', { targets: { browsers: ['last 2 version']}}]
                    ]
                }
            }
        ]
    }
};