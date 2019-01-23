# Node 学习笔记

## Node 模块系统

### CommonJS 规范

```javascript
exports使用方法;
module.exprots = {
  text: "hello node"
};

exprots.a = {
  text: "hello node"
};

require使用方法;

var data = require("./a.js");
```

### 模块系统

核心模块（fs、http、url) 
第三方模块(art-template)
自定义模块(自定义js文件)

### npm 包管理系统

npm 常用命令

```javascript
 npm init 项目初始化
 npm install packagename 安装依赖包
 npm uninstall packagename  卸载依赖包
```

### express 框架
