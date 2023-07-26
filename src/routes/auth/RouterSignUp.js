const express = require('express');
const middlewareSignUp = require('../../middleware/auth/MiddlewareSignUp');
const middlewareVerifySignLog = require('../../middleware/VerifyJWT/MiddlewareVerifySignLog')

let routerSignUp = express.Router();

routerSignUp.post('/',middlewareVerifySignLog, middlewareSignUp);

module.exports = routerSignUp;