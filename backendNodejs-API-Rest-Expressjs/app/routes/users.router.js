const express = require('express');
const UserService = require('../services/user.service');

const router = express.Router();
const service = new UserService();

router.get('/', (req, res) => {
  const users = service.find();
  res.json(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const user = service.findOne(id);
  res.json(user);
});

router.post('/', (req, res) => {
  const body = req.body;
  const newUser = service.create(body);
  res.status(201).json(newUser);
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;
  const updatedUser = service.update(id, body);
  res.json(updatedUser);
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const deletedUser = service.delete(id);
  res.json(deletedUser);
});

module.exports = router;