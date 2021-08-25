  
const connection = require('../config/database');


const model = (sql) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result, fields) => {
            if(err){
                console.error(err);
                reject(err)
            }
            resolve(result);
        })

    })
}

module.exports = model;