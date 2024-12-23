const sequelize = require('../config/db_connection');
const { DataTypes, Model, UUIDV4 } = require('sequelize');

class PrescSequelize extends Model {}

PrescSequelize.init({
    prescriptionId: {
        type: DataTypes.STRING,
        defaultValue: UUIDV4,
        primaryKey: true,
    },
    patientId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    doctorId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    appointmentId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pharmacistId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    issueDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    issueTime: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    prescription: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    dosage: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'Prescription',
    timestamps: false,
    underscored: true,
    tableName: 'prescriptions',
});

// PatientSequelize.hasMany(PrescSequelize, {foreignKey: 'patientId'});

// PrescSequelize.sync({force: false})
// .then(() => {console.log('Prescription table created successfully');})
// .catch((error) => {console.log('Error creating prescription table', error)})

module.exports = PrescSequelize;
