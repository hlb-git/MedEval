
const {v4 : uidv4} = require('uuid');
const ApptSequelize = require('./apptSequelize.model');


class Appointment {
    static model = 'appointment';
    constructor(attributes) {
        const dateTime = new Date();
        this.apptDate = dateTime.toISOString().slice(0,10);
        this.apptTime = dateTime.toTimeString().slice(0, 8);
        this.apptCreatedAt = new Date();
        this.appointmentId = attributes.appointmentId || uidv4();
        this.patientId = attributes.patientId;
        this.doctorId = attributes.doctorId;
        this.pharmacistId = attributes.pharmacistId || null;
        this.location = attributes.location || null;
    }

    static useSequelizeModel(model) {
        this.sequelizeModel = model;
    }
    
    static async create(attributes) {
        const record = await this.sequelizeModel.create(attributes);
        return record;
    }

    static async updateById(id, updates) {
        const [updated] = await this.sequelizeModel.update(updates, {where: {[`${this.model}Id`]: id}});
        if (updated) {
            const updatedRecord = await this.sequelizeModel.findOne({where: {[`${this.model}Id`]: id}});
            return new this(updatedRecord);
        }
        return null;
    }

    static async findAll() {
        const records = await this.sequelizeModel.findAll();
        return records.map((record) => new this(record));
    }

    static async findById(id) {
        const record = await this.sequelizeModel.findOne({where: {[`${this.model}Id`]: id}});
        return record ? new this(record) : null;
    }

    static async deleteById(id) {
        const deleted = await this.sequelizeModel.destroy({where: {[`${this.model}Id`]: id}});
        return deleted;
    }
}

Appointment.useSequelizeModel(ApptSequelize);
module.exports = Appointment;
