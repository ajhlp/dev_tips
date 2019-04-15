import { Response, Request, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import * as jwt from 'jsonwebtoken';
import * as log from '../util/logger';
import * as passwordUtil from '../util/password';
import { PERM_SYS_ADMIN } from '../models/perms';

const result = dotenv.config()

if (result.error) {
  throw result.error
}

const secret = process.env.JWT_SECRET;
const TOKEN_EXPIRE_TIME = '12h';
const FAKED_USER_ID = 1;
const FAKED_USER_NAME = "admin";
const FAKED_PASSWORD = "a07483b258e7711ebbcb89239d4be3b6"; // 123456

/* Login. */
export let login = async (req: Request, res: Response, next: NextFunction) => {
    log.info('handle login request');
    const uname = req.body.username;
    const upass = req.body.password;
    if (uname === FAKED_USER_NAME && passwordUtil.encrypt(upass) === FAKED_PASSWORD) {
        return res.send({
            id: FAKED_USER_ID,
            full_name: uname,
            token: jwt.sign({ id: FAKED_USER_ID, permissions: [PERM_SYS_ADMIN] }, secret, { expiresIn: TOKEN_EXPIRE_TIME })
        });
    } else {
        return res.status(400).send({
        });
    }
};

export let index = async (req: Request, res: Response, next: NextFunction) => {
    log.info('handle index request');
    return res.send({
        success: true,
        data: "Hello World"
    });
};
