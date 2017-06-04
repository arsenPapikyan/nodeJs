module.exports = {
    entry: "./components/appReact.jsx",
    output: {
        path: __dirname + "/components",
        filename: "bundle.jsx"
    },
   
    module: {
        loaders: [
            {
                exclude: /(node_modules)/,
                loader: "babel",
                query: {
                    presets: ['es2015', 'react']
                }
            }

        ]
    },
    resolveLoader: {
        moduleExtensions: ['-loader']
    },
    watch: true
}