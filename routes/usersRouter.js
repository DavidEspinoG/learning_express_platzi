const express = require('express');
const router = express.Router();
const UserService = require('../services/userService');
const service = new UserService();

router.get('/', async (req, res) => {
  const users = await service.find();
  res.json(users);
})

module.exports = router;