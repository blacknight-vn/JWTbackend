const express = require('express');
const middlewareVerifyJWT = require('../../middleware/VerifyJWT/MiddlewareVerifyJWT');
const middlewareProfile = require('../../middleware/index/MiddlewareProfile');

let routerProfile = express.Router();
routerProfile.get('/', middlewareVerifyJWT, middlewareProfile);

module.exports = routerProfile;