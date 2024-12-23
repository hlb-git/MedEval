
const {v4 : uidv4} = require('uuid');


class SuperClass {
    constructor(attributes) {
        this.id = uidv4; // this creates unique id for each object
        const dateTime = new Date();
        let updatedDateTime = new Date();
        this.createdDate = dateTime.toISOString().slice(0,10);
        this.createdTime = dateTime.toTimeString().slice(0, 8);
        this.updatedDate = updatedDateTime.toISOString().slice(0,10);
        this.updatedTime = updatedDateTime.toTimeString().slice(0, 8);
        this.firstname = attributes.firstname || null;
        this.lastname = attributes.lastname || null;
        this.gender = attributes.gender || null;
        this.email = attributes.email || null;
        this.password = attributes.password || null;
        this.DOB = attributes.DOB || null;
        this.countryCode = attributes.countryCode || null;
        this.phoneNumber = attributes.phoneNumber || null;
        this.country = attributes.country;
        // the above attributes are common to all human related classes that inherit from this superclass
    }
    static redacted(obj) {
        delete obj.password;
        delete obj.createdDate;
        delete obj.createdTime;
        delete obj.updatedDate;
        delete obj.updatedTime;
        return obj;
    }

    //this method below is a static method that is used to set the sequelize model for the class that inherits from this superclass
    static useSequelizeModel(model) {
        this.sequelizeModel = model;
    }
    
    static async create(attributes) {
        const record = await this.sequelizeModel.create(attributes);
        return record;
    }

    static async updateByEmail(email, updates) {
        const [updated] = await this.sequelizeModel.update(updates, {where: {email: email}});
        if (updated) {
            const updatedRecord = await this.sequelizeModel.findOne({where: {email: email}});
            return new this(updatedRecord);
        }
        return null;
    }

    static async findAll() {
        const records = await this.sequelizeModel.findAll();
        return records.map((record) => new this(record));
    }

    static async findByEmail(email) {
        const record = await this.sequelizeModel.findOne({where: {email: email}});
        return record ? new this(record) : null;
    }

    static async deleteByID(id) {
        const deleted = await this.sequelizeModel.destroy({where: {[`${this.model}Id`]: id}});
        return deleted;
    }
}

module.exports = SuperClass;
