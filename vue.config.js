
module.exports = {
    outputDir: './frontend/dist',
    lintOnSave: true,
    configureWebpack: {
        resolve: {
            alias: {
                '@': __dirname + '/frontend/src'
            }
        },
        entry: {
            app: './frontend/src/main.js'
        }
    }
}