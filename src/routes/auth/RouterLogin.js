const middlewareLogin = require('../../middleware/auth/MiddlewareLogin');
const middlewareVerifySignLog = require('../../middleware/VerifyJWT/MiddlewareVerifySignLog');
const express = require('express');

let routerLogin = express.Router();

routerLogin.post('/',middlewareVerifySignLog, middlewareLogin);

module.exports = routerLogin