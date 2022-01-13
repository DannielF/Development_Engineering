/**
 * @function routerApi - This function is used to create a router for the API.
 * @param {express} app - The express app.
 * @const {express.Router} router - The router.
 * @const {user.router} usersRouter - The user router.
 * @route GET /api/v1/users/:id
 */
const express = require('express');

const usersRouter = require('./user.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/users', usersRouter);
}

module.exports = routerApi;