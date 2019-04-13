[NODEJS](https://nodejs.org)
===

## 环境配置

> 建议使用[NVM](https://github.com/creationix/nvm)来管理本机NODEJS版本 

**NVM常用命令**

```bash

nvm install node #安装最新版本node

nvm install 8.9.0 #安装指定版本node

nvm ls #查看已安装的node版本情况

nvm use 10.15.3 #指定使用某个版本node

```

## Hello World

按编程界的通用准则，摘抄官网的一段Hello World代码

```bash
cd /home/yourname #进入个人主目录
vi app.js #创建demo文件，并写入如下内容
```

```nodejs
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```

```bash
node app.js #启动程序
```
然后用浏览器访问 http://localhost:3000 , 就会看到页面显示**Hello World**. 恭喜您成功学会NodeJS

## 常用WEB服务框架

* [EXPRESS](http://expressjs.com)
