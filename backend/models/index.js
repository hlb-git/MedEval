const Sequelize = require('../config/db_connection');
const PatientSequelize = require('./patientSequelize.model');
const DoctorSequelize = require('./doctorSequelize.model');
const PharmacistSequelize = require('./pharmacistSequelize.model');
const ApptSequelize = require('./apptSequelize.model');
const PrescSequelize = require('./prescSequelize.model');
const WaitListSequelize = require('./waitlistSequelize.model');


PatientSequelize.hasMany(PrescSequelize, {foreignKey: 'patientId', onDelete: 'CASCADE'});
PrescSequelize.belongsTo(PatientSequelize, {foreignKey: 'patientId'});
PatientSequelize.hasMany(ApptSequelize, {foreignKey: 'patientId', onDelete: 'CASCADE'});
ApptSequelize.belongsTo(PatientSequelize, {foreignKey: 'patientId'});
DoctorSequelize.hasMany(ApptSequelize, {foreignKey: 'doctorId', onDelete: 'CASCADE'});
ApptSequelize.belongsTo(DoctorSequelize, {foreignKey: 'doctorId'});
PharmacistSequelize.hasMany(PrescSequelize, {foreignKey: 'pharmacistId', onDelete: 'CASCADE'});
PrescSequelize.belongsTo(PharmacistSequelize, {foreignKey: 'pharmacistId'});

Sequelize.sync({force: false})
.then(() => console.log('Tables relationship mapped successfully...'))
.catch(err => console.log('Error creating tables:', err));

module.exports = {
    PatientSequelize,
    DoctorSequelize,
    PharmacistSequelize,
    ApptSequelize,
    PrescSequelize
}
