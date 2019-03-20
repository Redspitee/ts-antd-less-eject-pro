This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## 操作步骤

本项目构建过程

### 项目初始化
1. yarn create react-app blog-admin --typescript
2. cd blog-admin
3. yarn eject
4. yarn add antd babel-plugin-import less less-loader react-loadable
5. webpack.config.js 
```
const cssRegex = /\.(css|less)$/; 
```
6. webpack.config.js getStyleLoaders 函数 给函数的 loaders 数组增加一个元素 让其调用less-loader解析less
```
{
　　loader:require.resolve('less-loader'),
　　options:{
　　　　javascriptEnabled: true    //允许通过js调用antd组件
　　}
}
```
7. module.exports 中     找到   resolve  属性  在设置他的 alias 对象：
```
　'@': paths.appSrc,     //通过 @  定位到src   paths 对象里有每个文件的地址引用   可修改
```
8. 安装redux yarn add redux react-redux redux-thunk react-router-dom
9. 安装装饰器依赖 yarn add babel-plugin-transform-decorators-legacy --save-dev
10. tsconfig.json  "compilerOptions"对象中 添加 "experimentalDecorators": true
11. 根目录下 新建.babelrc文件,注意package.json中与此文件不要有重复声明
```
{
  "presets": [
    "react-app"
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "antd",
        "style": true
      }
    ],
    ["@babel/plugin-proposal-decorators", {
      "legacy": true
    }]
  ]
}
```

12. 使用react-router-dom 报错 yarn add @types/react-router-dom
13. yarn add @babel/plugin-transform-react-jsx
14. yarn add @babel/plugin-transform-react-jsx-source
15. yarn add @babel/plugin-transform-react-jsx-self
16. yarn add @babel-plugin-transform-decorators-legacy

17. @ 装饰器一直报错
vscode setting  `"javascript.implicitProjectConfig.experimentalDecorators": true` 无效
tsconfig.json `experimentalDecorators": true,` 也无效
最后 在代码里加`@ts-ignore`生效... 浪费时间，(ˉ▽ˉ；)...
```
//@ts-ignore
@connect(
  state=>state,
  {}
)
```


