const routes = require('express').Router();
const getPostRoute = require('./getPostRoute/index');
const putRoute = require('./putRoute/index');

routes.use('/posts', getPostRoute);
routes.use('/posts/:id',putRoute);

module.exports = routes;