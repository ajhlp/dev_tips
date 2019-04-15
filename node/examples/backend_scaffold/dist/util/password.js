"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const md5 = require("md5");
const result = dotenv.config();
if (result.error) {
    throw result.error;
}
exports.encrypt = (sourceMD5Password) => {
    return md5(sourceMD5Password + ':' + process.env.USER_PWD_SALT).toLowerCase();
};
