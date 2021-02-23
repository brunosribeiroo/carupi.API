const conexao = require('../../db');
const ParamsToJSON = require('../Helpers/ParamsToJSON');

class Delete{

    deleteOne(dados){
        return new Promise(async(resolve, reject) =>{
            const db = await conexao();
            var data = await ParamsToJSON.queryToJSON(dados.condicao);

            db.collection('cars').deleteOne(data, (error, result) =>{
                if(error) {
                    console.error('erro ao deletar carro do DB', error);
                    reject(error);
                } else {
                    resolve(true);
                }
            })
        })
    }

    deleteMany(dados){
        return new Promise(async(resolve, reject) =>{
            const db = await conexao();
            var data = await ParamsToJSON.queryToJSON(dados.condicao)
            db.collection('cars').deleteMany(data, (error, result) =>{
                if(error){
                    console.error('erro ao deletar os carros selecionados no DB', error);
                    reject(error);
                } else {
                    resolve(true);
                }
            })
        })
    }
}

module.exports = new Delete;