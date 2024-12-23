
const SuperClass = require('./superclass');
const PatientSequelize = require('./patientSequelize.model');


class Patient extends SuperClass {
    static model = 'patient';
    constructor(attributes) {
        super(attributes);
        this.patientId = attributes.patientId || this.id();
        this.height = attributes.height || null;
        this.weight = attributes.weight || null;
        this.maritalStatus = attributes.maritalStatus || null;
        this.age = attributes.age || null;
        this.nin = attributes.nin || null;
    }
}
Patient.useSequelizeModel(PatientSequelize);

module.exports = Patient;
