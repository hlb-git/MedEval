const sequelize = require('../config/db_connection');
const { DataTypes, Model, UUIDV4 } = require('sequelize');

class WaitlistSequelize extends Model {}

WaitlistSequelize.init({
    waitingUserId: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    createdDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    createdTime: {
        type: DataTypes.TIME,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, {sequelize,
    modelName: 'Waitlist',
    timestamps: false,
    underscored: true,
    tableName: 'waitlist'
});

module.exports = WaitlistSequelize;
