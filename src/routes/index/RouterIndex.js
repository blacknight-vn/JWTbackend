const express = require('express');
const middlewareIndex = require('../../middleware/index/MiddlewareIndex');

let routerIndex = express.Router();

routerIndex.get('/', middlewareIndex);

module.exports = routerIndex;