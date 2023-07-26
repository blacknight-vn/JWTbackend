const express = require('express');
const middlewareAuth = require('../../middleware/auth/MiddlewareAuth');

let routerAuth = express.Router();
routerAuth.get('/', middlewareAuth);

module.exports = routerAuth;
