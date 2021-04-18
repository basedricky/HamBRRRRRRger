const connection = require('./connection.js');
// was able to find a very efficient connection query method here https://www.codota.com/code/javascript/functions/mysql/Connection/query
const orm = {

    selectAll(table, cb) {
        connection.query(`SELECT * FROM ${table}`, (err, result) => {
            if (err) throw err;
            cb(result)
        })
    },

    insertOne(reqBody, name, cb) {
        console.query(`INSERT INTO ?? SET name = ?`, [reqBody, name], (err, result) => {
            if (err) throw err;
            cb(result);

        })
    },

    updateOne(id, cb) {
        connection.queryj(`UPDATE burgers SET eaten = 1 WHERE ID = ?`, [id], (err, result) => {
            if (err) throw err;
            cb(result)

        })
    },

};

module.exports = orm;
