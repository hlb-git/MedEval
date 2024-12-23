const sequelize = require("../config/db_connection");
const { DataTypes, Model, UUIDV4 } = require('sequelize')

class DoctorSequelize extends Model {}

DoctorSequelize.init({
    doctorId: {
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
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING,
        allowNull: true,
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
    specializations: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    hospital: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    department: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    yearsOfExperience: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
    modelName: 'Doctor',
    underscored: true,
    tableName: 'doctors',
    timestamps: false
});

// DoctorSequelize.sync({force: false})
// .then(() => console.log('Doctors table created successfully'))
// .catch(err => console.log('Error creating patients table:', err));

module.exports = DoctorSequelize;
