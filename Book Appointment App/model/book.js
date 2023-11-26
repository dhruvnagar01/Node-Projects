const con = require('../util/database');

const data = sequelize.define('data', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },

    phone_no : {
        type:Sequelize.INTEGER,
        allowNull : false
    }
});
module.exports = data;
