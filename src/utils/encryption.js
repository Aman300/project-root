// src/utils/encryption.js
const bcrypt = require('bcrypt');
exports.hashPassword = (password) => bcrypt.hashSync(password, 10);
