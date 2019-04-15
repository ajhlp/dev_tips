"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const perms_1 = require("../models/perms");
// wechat
const exampleRouter = require("./exampleRouter");
exports.ROUTER_CONFIG = [{
        method: 'post',
        url: '/login',
        handler: [exampleRouter.login],
        perms: []
    }, {
        method: 'get',
        url: '/',
        handler: [exampleRouter.index],
        perms: [perms_1.PERM_SYS_ADMIN]
    }];
