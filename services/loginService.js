const model = require("../model/model");

module.exports = {
    findUser:(req) => {
        let sql = `select * from usuario where login = '${req.body.usuario}' and senha = '${req.body.senha}' `;
        return model(sql)
    }
}