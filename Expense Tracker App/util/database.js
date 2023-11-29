// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('node-complete','root','rootpassword',{
//     host: "localhost",
//     dialect: "mysql"
// });

const config = {
    username: 'root',
    password: 'rootpassword',
    database: 'node-complete',
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
  };
  
  module.exports = `mysql://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`;