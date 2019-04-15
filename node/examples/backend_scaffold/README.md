后端服务示例项目
===

## install

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

## env

> 本地开发请将.env.dev 复制并重命名为 .env

> 生产环境请将.env.prod 复制并重命名为 .env

## build

```bash
npm run gulp
```

*将ts文件编译为js*

## start up

```bash
pm2 start bin/www --name backend_server
```

*针对生产环境*