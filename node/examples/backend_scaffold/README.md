后端服务示例项目
===

## 安装依赖

* install nvm

    *[传送门](../../README.md)*

* install node

    ```bash
    nvm install 8.9.0
    ```

* install pm2

    ```bash
    npm install pm2 -g
    ```

    *针对生产环境*

## 环境变量

> 本地开发请将.env.dev 复制并重命名为 .env

> 生产环境请将.env.prod 复制并重命名为 .env

## 编译

```bash
npm run gulp
```

*将ts文件编译为js*

## 启动

```bash
pm2 start bin/www --name backend_server
```

*针对生产环境*

## 目录结构

|目录|说明|
|-|-|
|bin|启动入口|
|src/config|配置数据|
|src/db|数据库工具类，默认postgres|
|src/models|数据库表或者业务参数等对象定义|
|src/routes|express路由定义|
|src/util|其他工具类|