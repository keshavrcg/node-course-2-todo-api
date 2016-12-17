var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://keshavrcg:Keshav1989@ds153677.mlab.com:53677/todoapp' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
