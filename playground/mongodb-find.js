// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');     //Destructuring : Now same as above statement


/* deStructuring
var user = {name: 'Keshav', age: 27};
var {name} = user;
console.log(name); */

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to mongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('584e1a82d8c700353eda7407')   //we need to create new ObjectID to find record by ID
  // }).toArray().then ((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // },(err)=> {
  //   console.log('Unable to fetch todos',err);
  // });

  // db.collection('Todos').find().count().then ((count)=>{
  //   console.log(`Todos count:${count}`);
  // },(err)=> {
  //   console.log('Unable to fetch todos',err);
  // });

  db.collection('Users').find({name:'Keshav'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err)=> {
    console.log('Unable to fetch Users',err);
  });

  // db.close();
});
