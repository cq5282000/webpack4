# webpack4

## 2018年3月21日

### 工具安装 && 测试环境搭建

 - 安装工具 react， react-dom
 - 安装 babel-preset-react，react转码， babel-preset-env，es2015转码，配置.bablerc文件。
 - 安装babel-loader，babel-loader使用babel来加载es2015的文件
 - loader是一个特殊的模块，webpack可以用它来把其他特定模块解析成JS。

 ### 新特性

 - webpack4的CLI指令功能被移除到了一个单独的包，webpack-cli，所以使用webpack的CLI指令的话，先安装webpack-cli

```bash
yarn add webpack-cli -D  // 安装到devDependencies
```

- webpack4加了一个mode配置， "development" | "production" | "none"，有这三个值，不设置会出现警告，对不同环境提供一些不同的默认配置，开发环境下默认开启。

- 生产环境默认开启了很多代码优化（minify，splite）。
- 开发时开启注册和验证，自动加上了eval devtool。
- 生产环境不支持watching，开发环境优化了重新打包速度。
- 自动设置process.env.NODE_ENV到不同环境，也就是不需要DefinePlugin来做这个了
- 如果你给mode设置为none，所有默认配置都去掉了

- html-webpack-plugin还没有更新，会出现compilation.templatesPlugin is not a function的错误，目前需要npm i webpack-contrib/html-webpack-plugin -D安装，官方说法是因为作者这段时间没空更新，所以他们自己fork了一份改了，现在先用这种方式用着，等作者有空了再合并进去。


### 2018年3月26日

 - 在没有任何配置的情况下，babel-preset-env和babel-preset-latest（或者babel-preset-es2015，babel-preset-es2016和babel-preset-es2017一起）的行为完全相同。

 - 支持被认为是latest的babel所有插件，不会包含stage-0插件

 - 但是在class里面直接生命尖头函数是在stage-x里面支持的，如果直接引入stage-x去支持这个功能的话，就会引入stage-x里面许多不需要的功能，所以最好的方法是单独引入一个插件babel-plugin-transform-class-properties去支持这个共能
