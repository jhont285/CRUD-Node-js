const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

module.exports = User;
