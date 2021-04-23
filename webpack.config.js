const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
//清理dist目录
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
module.exports = {
    entry:{
        index:"./js/index.js",
        db:"./js/db.js"
    },
    output:{
        filename:"bundle.[name].js",
        path:path.resolve(__dirname,'dist')
    },
    devtool:'inline-source-map',
    //注意包的版本问题npm install webpack-cli@3.3 -D 
    devServer:{
        contentBase:path.join(__dirname, 'dist'),//服务器目录
        open:true,//自动打开浏览器，
        // 默认情况下，不接受运行在HTTPS上，且使用了无效证书的后端服务器。如果想要接受，修改配置如下：
        proxy:{
            "/api":{
                target:"https://other-server.example.com",
                secure:false
            }
        },
        //设置端口号
        port:8085,
        //自动刷新机制
        inline:true,
        progress: true,//显示打包速度
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'我是test文件',
            template:'index.html',//模板文件，将根据这个文件生成，
            filename:"index.html",
            chunks:['index'],
            //定义参数变量值
            templateParameters: (compilation, assets, assetTags, options) => {
                console.log(arguments)
                return {
                  title: "测试htmlWebpackPlugin",
                  myName: 'huang-biao',
                  sonName:'huang-haili'
                }
              },
        }),
        new HtmlWebpackPlugin({
            title:'我是文件db',
            filename:"db.html",
            template:'db.html',//模板文件，将根据这个文件生成
            chunks:['db'],
            //允许注入meta-tags。
            meta:{viewport:'width=device-width,initial-scale=1,shrik-to-fit=no'},
            inject:'body',
            hash:true
        }),
        //删除上次打包文件，默认目录'./dist'
        new CleanWebpackPlugin()
    ]

}