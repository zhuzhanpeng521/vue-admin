module.exports = {
    // 基本路径  对外公开路径   3.3使用 publicPath   basePath 已经被废弃
    publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
    // 输出文件目录
    outputDir: "dist",
    // 静态资源得目录
    assetsDir: "assets",
    // eslint-loader 是否在保存的时候检查
    lintOnSave: false,
    // 生产环境下的sourcemap  方便调试错误  会报哪里错误
    productionSourceMap: true,
    // webpack配置 config
    configureWebpack: () => { },
    chainWebpack: () => { },
    // css相关配置
    css: {
        // 启动 css modulels
        requireModuleExtension: true,     //  module  被废弃
        // 是否使用css分离插件
        extract: true,
        // 开启css Source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            sass: {//配置sass  如果你需要sass的话 
                prependData: `@import "./src/style/main.scss"`
            }
        },
    },
    // webpack-dev-server 相关配置
    devServer: {
        host: '0.0.0.0',
        port: 8080,
        open: true,   //自动打开浏览器
        proxy: null,  //设置代理  
        // 配置多个代理
        // proxy: {
        //   "/api": {
        //     target: "<url>",// 要访问的接口域名
        //     ws: true,// 是否启用websockets
        //     changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        //     pathRewrite: {
        //         '^/api': '' //这里理解成用'/api'代替target里面的地址,比如我要调用'http://40.00.100.100:3002/user/add'，直接写'/api/user/add'即可
        //       }
        //   },
        //   "/foo": {
        //     target: "<other_url>"
        //   },
        // }
    },
    // 第三方得插件配置
    pluginOptions: {
        // ....
    }

}