"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const expressSession = require("express-session");
const dotenv = require("dotenv");
const jwt = require("express-jwt");
const jwtp = require("express-jwt-permissions");
const cors = require("cors");
const config_1 = require("./routes/config");
const result = dotenv.config();
if (result.error) {
    throw result.error;
}
const guard = jwtp();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.EXPRESS_SECRET));
const unprotectedPathes = [
    /\/login\/*/,
    /\/public\/*/,
    /favicon.ico/
];
app.use(jwt({ secret: process.env.JWT_SECRET }).unless({
    path: unprotectedPathes
}));
app.set('trust proxy', 1); // trust first proxy
app.use(expressSession({
    secret: process.env.EXPRESS_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}));
config_1.ROUTER_CONFIG.forEach((conf) => {
    switch (conf.method) {
        case 'get':
            if (conf.perms.length > 0) {
                app.get(conf.url, guard.check(conf.perms), conf.handler);
            }
            else {
                app.get(conf.url, conf.handler);
            }
            break;
        case 'post':
            if (conf.perms.length > 0) {
                app.post(conf.url, guard.check(conf.perms), conf.handler);
            }
            else {
                app.post(conf.url, conf.handler);
            }
            break;
        case 'put':
            if (conf.perms.length > 0) {
                app.put(conf.url, guard.check(conf.perms), conf.handler);
            }
            else {
                app.put(conf.url, conf.handler);
            }
            break;
        case 'delete':
            if (conf.perms.length > 0) {
                app.delete(conf.url, guard.check(conf.perms), conf.handler);
            }
            else {
                app.delete(conf.url, conf.handler);
            }
            break;
    }
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});
// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    return res.send(res.locals);
});
module.exports = app;
