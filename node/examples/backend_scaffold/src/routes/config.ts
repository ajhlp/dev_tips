import { RequestHandler } from 'express';

import { PERM_SYS_ADMIN } from '../models/perms';

// wechat
import * as exampleRouter from './exampleRouter';

export const ROUTER_CONFIG: {
    method: string;
    url: string;
    handler: RequestHandler[],
    perms: string[] | string[][];
}[] = [{
    method: 'post',
    url: '/login',
    handler: [exampleRouter.login],
    perms: []
}, {
    method: 'get',
    url: '/',
    handler: [exampleRouter.index],
    perms: [PERM_SYS_ADMIN]
}];
