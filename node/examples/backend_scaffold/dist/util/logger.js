"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4js_1 = require("log4js");
const logger = log4js_1.getLogger();
logger.level = 'info';
log4js_1.configure({
    appenders: { out: { type: 'stdout' } },
    categories: { default: { appenders: ['out'], level: 'info' } }
});
exports.info = (message, ...args) => {
    logger.info(message, args);
};
exports.warning = (message, ...args) => {
    logger.warn(message, args);
};
exports.error = (message, ...args) => {
    logger.error(message, args);
};
