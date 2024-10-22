// src/validations/userValidation.js
const { check } = require('express-validator');
exports.validateUser = [
  check('email').isEmail(),
  check('password').isLength({ min: 6 })
];
