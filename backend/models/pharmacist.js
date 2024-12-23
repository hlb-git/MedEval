const SuperClass = require('./superclass');
const PharmacistSequelize = require('./pharmacistSequelize.model');

class Pharmacist extends SuperClass {
    static model = 'pharmacist';
    constructor(attributes) {
        super(attributes);
        this.pharmacistId = attributes.pharmacistId || this.id();
        this.qualification = attributes.qualification || null;
        this.yearsOfExperience = attributes.yearsOfExperience || null;
    }
}

Pharmacist.useSequelizeModel(PharmacistSequelize);
module.exports = Pharmacist;
