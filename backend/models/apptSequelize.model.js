const sequelize = require('../config/db_connection');
const { DataTypes, Model, UUIDV4 } = require('sequelize');

class ApptSequelize extends Model {}

ApptSequelize.init({
    appointmentId: {
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
        allowNull: true,
    },
    pharmacistId: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    apptDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    apptTime: {
        type: DataTypes.TIME,
        allowNull: false,
    },
    apptCreatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: true,
    }
}, {
    sequelize,
    modelName: 'Appointment',
    timestamps: false,
    underscored: true,
    tableName: 'appointments',
})

// ApptSequelize.sync({force: false})
// .then(() => {console.log('Appoitments table created successfully');})
// .catch((error) => {console.log('Error creating appointments table', error)})

module.exports = ApptSequelize;
