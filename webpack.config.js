module.exports = {
    entry: "./app/App.js", //root component
    output: {
       filename: "public/bundle.js" //where webpack build goes
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,  //test to see whether file should be transformed by webpack
                exclude: /(node_modules|bower_components)/, //files to be excluded from transformation
                loader: 'babel', //transformations to apply
                query: {
                    presets: ['react', 'es2015'] //configurations for transformation
                }
         }
        ]
    }
}