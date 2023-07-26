const express = require('express');
const middlewareHome = require('../../middleware/index/MiddlewareHome');
const middlewareVerifyJWT = require('../../middleware/VerifyJWT/MiddlewareVerifyJWT');

let routerHome = express.Router();
routerHome.get('/', middlewareVerifyJWT, middlewareHome);

module.exports = routerHome;