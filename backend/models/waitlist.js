const {v4: uidv4} = require('uuid');
const WaitListSequelize = require('./waitlistSequelize.model');

class WaitList {
    constructor(attributes) {
        this.waitingUserId = uidv4();
        const dateTime = new Date();
        this.createdDate = dateTime.toISOString().slice(0, 10);
        this.createdTime = dateTime.toTimeString().slice(0, 8);
        this.email = attributes.email || null;
    }
    static async create(attributes) {
        let record = await WaitList.sequelizeModel.create(attributes);
        record = record.toJSON();
        delete record.waitingUserId;
        return record;
    }

    static async allWaitlist() {
        const records = await WaitList.sequelizeModel.findAll();
        return records.map((record) => new WaitList(record));
    }
}

WaitList.sequelizeModel = WaitListSequelize;
module.exports = WaitList;
