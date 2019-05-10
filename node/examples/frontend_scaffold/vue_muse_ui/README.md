Vue + Muse UI 示例项目
===

## 目录结构

```
|
|--src
    |
    |--components (组件根目录)
    |
    |--locale (vue-i18n国际化配置)
    |
    |--route (vue-router路由信息配置)
    |
    |--store (vuex配置)
    |
    |--utils (工具类)
    |
    |--App.vue (vue根组件)
    |
    |--main.js (vue入口文件，设置fontawesome引用图标，axios公共拦截器)
```

## UI组件

* [传送门](https://muse-ui.org)

## 开发启动

```bash
npm start
```

## 其他说明

* nginx配置

```bash
    
    # 由于vue router配置了HTML5 history 模式， nginx需进行如下配置

    location / {
        try_files $uri $uri/ /index.html;
    }
```