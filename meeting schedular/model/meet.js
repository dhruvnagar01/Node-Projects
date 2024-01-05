const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const meets = sequelize.define('meets',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    time : {
        type:Sequelize.STRING,
        allowNull:false
    },
    

    slotsAvail : {
        type:Sequelize.INTEGER,
        allowNull:false
    }
}, {
    timestamps: false,   // Disable timestamps (createdAt and updatedAt)
}
 )

 module.exports = meets;