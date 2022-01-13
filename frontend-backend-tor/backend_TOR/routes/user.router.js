/**
 * @const service - Service for user
 * @method getDataUser - Get data user
 * @param {string} id - The id of user
 */
const express = require('express');
const UserService = require('../services/user.service');

const router = express.Router();
const service = new UserService();

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.getDataUser(id);
      res.send(user.data)
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;