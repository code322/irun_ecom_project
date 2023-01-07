const express = require('express');
const router = express.Router();
const {
  login,
  register,
  refreshToken,
  logout,
} = require('../controller/userController');

router.post('/login', login);
router.post('/register', register);
router.get('/refresh', refreshToken);
router.get('/logout', logout);

module.exports = router;
