 // 配置server.js服务器文件，需要自己创建
 const express = require('express');
 const webpack = require('webpack');
 const webpackDevMiddleware = require('webpack-dev-middleware');

 const app = express();
 const config = require('./webpack.config.js');
 const compiler = webpack(config);

 // Tell express to use the webpack-dev-middleware and use the webpack.config.js
 // configuration file as a base.
 app.use(webpackDevMiddleware(compiler, {
   publicPath: config.output.publicPath
 }));

 // Serve the files on port 3000.
 app.listen(3000, function () {
   console.log('Example app listening on port 3000!\n');
 });
 //添加一个npm script,package.json

 //运行npm run server:express 便一个在浏览器中通过访问localhost:3000访问到该服务器