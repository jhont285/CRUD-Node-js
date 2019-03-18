const HttpStatus = require('http-status-codes');
const createError = require('http-errors');

const User = require('../models/user');

exports.index = async (req, res, next) => {  // eslint-disable-line
  const movies = await User.find();
  return res.json(movies);
};

exports.show = async (req, res, next) => {
  const movie = await User.findById(req.params.id);
  if (!movie) return next(createError(HttpStatus.NOT_FOUND));
  return res.json(movie);
};

exports.create = async (req, res, next) => { // eslint-disable-line
  const user = new User(req.body);
  const movie = await user.save();
  return res.status(HttpStatus.CREATED).json(movie);
};

exports.update = async (req, res, next) => {
  const movie = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!movie) return next(createError(HttpStatus.NOT_FOUND));
  return res.json(movie);
};

exports.delete = async (req, res, next) => {
  const movie = await User.findByIdAndRemove(req.params.id);
  if (!movie) return next(createError(HttpStatus.NOT_FOUND));
  return res.sendStatus(HttpStatus.NO_CONTENT);
};
