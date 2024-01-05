const Sequelize=require('sequelize');

const sequelize=new Sequelize('meetingscheduler','root','rootpassword',({
    dialect:'mysql',
    host: 'localhost',
}))

module.exports=sequelize;