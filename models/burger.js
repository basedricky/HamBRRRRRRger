const orm = require('../config/orm.js');

// the cats app activity was a life saver here

const burgers = {
    selectAll(cb) {
        orm.selectAll('burgers', (res) => cb(res));
    },

    insertOne(reqBody, cb) {
        orm.insertOne('burgers', reqBody, (res) => cb(res));
    },

    updateOne(id, cb) {
        orm.updateOne(id, (res) => cb(res));
    }

}

module.exports = burgers;