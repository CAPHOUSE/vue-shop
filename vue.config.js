// 新增vue.config.js并增加代码：

module.exports = {
  lintOnSave:false,//这里禁止使用eslint-loader

  devServer: { //配置自动启动和端口
    open: true,
    port: 8888
  }
}
