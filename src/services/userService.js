// src/services/userService.js
exports.createUser = async (userData) => {
    const user = new User(userData);
    return await user.save();
  };
  