var env = process.env.NODE_ENV || 'developement';

if(env === 'developement'){
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';

} else if(env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';

} else if(env === 'production') {
  process.env.MONGODB_URI = 'mongodb://keshavrcg:Keshav1989@ds153677.mlab.com:53677/todoapp';
}
