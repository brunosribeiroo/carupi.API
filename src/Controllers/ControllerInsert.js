const Insert = require('../Models/Insert');

class ControllerInsert{

    async insertOne(dados, res){
        const insertOne = await Insert.insertOne(dados);
        res.send('Carro adicionado com sucesso');
    }
}

module.exports = new ControllerInsert;