const routes = require('express').Router();
const getPostRoute = require('./getPostDeleteRoute/index');
const putRoute = require('./putRoute/index');
const deleteRoute = require('./getPostDeleteRoute/index');

routes.use('/posts', getPostRoute);
routes.use('/posts/like',putRoute);
routes.use('/posts/',deleteRoute);

module.exports = routes;