const express = require('express');
const UserService = require('../services/user.service');

const router = express.Router();
const service = new UserService();

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await service.findOne(id);
      res.send(user.data)
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;