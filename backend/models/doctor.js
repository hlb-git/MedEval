const SuperClass = require('./superclass');
const DoctorSequelize = require('./doctorSequelize.model');

class Doctor extends SuperClass {
    static model = 'doctor';
    constructor(attributes) {
        super(attributes);
        this.doctorId = attributes.doctorId || this.id();
        this.specialization = attributes.specialization || null;
        this.hospital = attributes.hospital || null;
        this.department = attributes.department || null;
        this.yearsOfExperience = attributes.yearsOfExperience || null;
    }
}

Doctor.useSequelizeModel(DoctorSequelize);
module.exports = Doctor
