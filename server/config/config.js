var env = process.env.NODE_ENV || 'developement';

if(env === 'developement' || env === 'test'){
  var config = require('./config.json');
  var envConfig = config[env];   //env will get the keys of our JSON file for that particular env

  Object.keys(envConfig).forEach((key)=> {
    process.env[key] = envConfig[key];
  });
}
