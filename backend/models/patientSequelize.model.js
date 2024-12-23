const sequelize = require("../config/db_connection");
const { DataTypes, Model, UUIDV4 } = require('sequelize');

class PatientSequelize extends Model {}

PatientSequelize.init({
    patientId: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        allowNull: false,
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
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    height: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    weight: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    maritalStatus: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    nin: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
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
    }
}, {
    sequelize,
    modelName: 'Patient',
    timestamps: false,
    underscored: true,
    tableName: 'patients'
});

// PatientSequelize.sync({force: false})
// .then(() => console.log('Patients table created successfully'))
// .catch(err => console.log('Error creating patients table:', err));

module.exports = PatientSequelize;
