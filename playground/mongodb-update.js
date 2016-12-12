// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');     //Destructuring : Now same as above statement

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to mongoDB server');

  // db.collection('Todos').findOneAndUpdate({   //needs 3 parameters: check documentation
  //   _id: new ObjectID("584e56fbd8c700353eda8f9b")
  // },{
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID("584df3aba6801d2604eb3847")
  // },{
  //   $set: {
  //     name: 'Keshav'
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result)=> {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("584df3aba6801d2604eb3847")
  },{
    $inc: {
      age: 3
    }
  }, {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });

  // db.close();
});
