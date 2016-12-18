const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result)=> {
//   console.log(result);
// });

//Todo.findOneAndRemove

//Todo.findByIdAndRemove

Todo.findByIdAndRemove('58570aa6323d91e73f2006c4').then((todo)=> {
  console.log(todo);
});
