const conexao = require('../../db');
const ParamsToJSON = require('../Helpers/ParamsToJSON');

class Update {

    updateOne(dados){
        return new Promise(async(resolve, reject) =>{
            const db = await conexao();
            var query = await ParamsToJSON.queryToJSON(dados.condicao);
            var data = await ParamsToJSON.queryToJSON(dados.newValue);
            var newValues = { $set: data };
    
            db.collection('cars').updateOne(query, newValues, (error, result) =>{
                if(error){
                    console.error('erro ao atualizar carro no DB', error);
                    reject(error);
                }  else {
                    resolve(true);
                }
            })
        })
    }

    updateAll(dados){
        return new Promise(async(resolve, reject) =>{
            const db = await conexao();
            var query = await ParamsToJSON.queryToJSON(dados.condicao);
            var data = await ParamsToJSON.queryToJSON(dados.newValue);
            var newValues = { $set: data};
    
            db.collection('cars').updateMany(query, newValues, (error, result) =>{
                if(error) {
                    console.error('erro ao atualizar todos os carros selecionados no DB', error);
                    reject(error);
                } else {
                    resolve(true);
                }
            })
        })
    }
}

module.exports = new Update;