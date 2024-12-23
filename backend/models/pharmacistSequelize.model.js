const sequelize = require("../config/db_connection");
const { DataTypes, Model, UUIDV4 } = require('sequelize')

class PharmacistSequelize extends Model {}

PharmacistSequelize.init({
    pharmacistId: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    DOB: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    countryCode: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phoneNumber: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
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
    updatedDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
    },
    updatedTime: {
        type: DataTypes.TIME,
        allowNull: true,
    },
    qualification: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    yearsOfExperience: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: 'Pharmacist',
    timestamps: false,
    underscored: true,
    tableName: 'pharmacists'
});

// PharmacistSequelize.sync({force: false})
// .then(() => console.log('Pharmacists table created successfully'))
// .catch(err => console.log('Error creating patients table:', err));

module.exports = PharmacistSequelize;
