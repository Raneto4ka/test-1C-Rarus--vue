const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '' 
        : '/',    
    assetsDir: '',
    outputDir: 'build',
    productionSourceMap: false, 
    configureWebpack: {
      plugins: [
        new StyleLintPlugin({
          files: ['src/**/*.{vue,scss}'],
        }),
      ],
    },
}