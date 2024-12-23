
const {v4 : uidv4} = require('uuid');
const PrescSequelize = require('./prescSequelize.model');


class Prescription {
    static model = 'prescription';
    constructor(attributes) {
        let dateTime = new Date();
        this.prescriptionId = attributes.PrescriptionId || uidv4();
        this.patientId = attributes.patientId;
        this.doctorId = attributes.doctorId;
        this.pharmacistId = attributes.pharmacistId;
        this.appointmentId = attributes.appointmentId;
        this.issueDate = dateTime.toISOString().slice(0,10);
        this.issueTime = dateTime.toTimeString().slice(0, 8);
        this.prescription = attributes.prescription;
        this.dosage = attributes.dosage;
    }

    static useSequelizeModel(model) {
        this.sequelizeModel = model;
    }
    
    static async create(attributes) {
        const record = await this.sequelizeModel.create(attributes);
        return record;
    }

    static async updateById(id, updates) {
        const [updated] = await this.sequelizeModel.update(updates, {where: {id: id}});
        if (updated) {
            const updatedRecord = await this.sequelizeModel.findOne({where: {id: id}});
            return new this(updatedRecord);
        }
        return null;
    }

    static async findAll() {
        const records = await this.sequelizeModel.findAll();
        return records.map((record) => new this(record));
    }

    static async findById(id) {
        const record = await this.sequelizeModel.findOne({where: {id: id}});
        return record ? new this(record) : null;
    }

    static async deleteById(id) {
        const deleted = await this.sequelizeModel.destroy({where: {id: id}});
        return deleted;
    }
}

Prescription.useSequelizeModel(PrescSequelize);
module.exports = Prescription;
