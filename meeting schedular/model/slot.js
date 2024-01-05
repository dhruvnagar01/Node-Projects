const Sequelize=require('sequelize');
const sequelize=require('../util/database');

const slot=sequelize.define('slots',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    username:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    useremail:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    time:{
        type:Sequelize.STRING,
        allowNull:false,
    }    
}, {
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
})

module.exports=slot;