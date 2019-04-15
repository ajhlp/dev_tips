"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const log = require("../util/logger");
const passwordUtil = require("../util/password");
const perms_1 = require("../models/perms");
const result = dotenv.config();
if (result.error) {
    throw result.error;
}
const secret = process.env.JWT_SECRET;
const TOKEN_EXPIRE_TIME = '12h';
const FAKED_USER_ID = 1;
const FAKED_USER_NAME = "admin";
const FAKED_PASSWORD = "a07483b258e7711ebbcb89239d4be3b6"; // 123456
/* Login. */
exports.login = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    log.info('handle login request');
    const uname = req.body.username;
    const upass = req.body.password;
    if (uname === FAKED_USER_NAME && passwordUtil.encrypt(upass) === FAKED_PASSWORD) {
        return res.send({
            id: FAKED_USER_ID,
            full_name: uname,
            token: jwt.sign({ id: FAKED_USER_ID, permissions: [perms_1.PERM_SYS_ADMIN] }, secret, { expiresIn: TOKEN_EXPIRE_TIME })
        });
    }
    else {
        return res.status(400).send({});
    }
});
exports.index = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    log.info('handle index request');
    return res.send({
        success: true,
        data: "Hello World"
    });
});
