// 引入插件
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const path = require('path')

function resolve (dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // configureWebpack为vue.config.js里的webpack配置
    configureWebpack: {
        // plugins配置里加下面的代码
        plugins: [
            AutoImport({
                resolvers: [ElementPlusResolver()]
            }),
            Components({
                resolvers: [ElementPlusResolver()]
            })
        ]
    },
    chainWebpack: config => {

        // 别名配置
        config.resolve.alias
            .set('components', resolve('src/components'))
            .set('views', resolve('src/views'))
            .set('@', resolve('src'))

        // 定义全局scss变量
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
            item
                .use('sass-resources-loader')
                .loader('sass-resources-loader')
                .options({
                    // 公用scss
                    resources: './src/scss/index.scss'
                })
                .end()
        })

        // 适配
        config.module
            .rule('scss')
            .oneOf('vue')
            .use('px2rem-loader')
            .loader('px2rem-loader')
            .before('postcss-loader') // this makes it work.
            .options({ remUnit: 37.5, remPrecision: 8 })
            .end()
    }
}