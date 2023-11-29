const Sequelize = require('sequelize');
const databaseUrl = require('../util/database');
const sequelize = new Sequelize(databaseUrl, {
    dialect: 'mysql', // Set the appropriate dialect (e.g., 'mysql', 'postgres', 'sqlite')
    // ... other options if needed
  });

const Expenses = sequelize.define('expenses', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },

    category: {
        type: Sequelize.STRING,
        allowNull: false
    },

    amount : {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    description : {
        type: Sequelize.STRING,
        allowNull: false
    }

} , {
    timestamps: false, // Disable timestamps (createdAt and updatedAt)
});

module.exports = Expenses;