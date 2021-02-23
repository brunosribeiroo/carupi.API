const conexao = require('../../db');
class Select{

    selectAll(){
        return new Promise(async (resolve, reject) =>{
            const db = await conexao();

            db.collection('cars').find({}).toArray((error, result) =>{
                if(error) {
                    console.error('erro ao buscar todos os carros no DB', error);
                    reject(error);
                } else {
                    resolve(result)
                }
            })
        })
    }

    selectOne(dados){
        return new Promise(async (resolve, reject) =>{
            const db = await conexao();
            db.collection('cars').find(dados).toArray((error, result) =>{
                if(error) {
                    console.error('erro ao buscar carro no DB', error);
                    reject(error);
                } else {
                    resolve(result)
                }
            })
        })
    }

    selectRangeYear(inicio, fim){
        return new Promise(async (resolve, reject) =>{
            const db = await conexao();
            var query = { "ano" : { "$gte" : inicio , "$lte" : fim} };
            db.collection('cars').find(query).toArray((error, result) =>{
                if(error) {
                    console.error('erro ao buscar carros com intervalo de ano', error);
                    reject(error);
                } else {
                    resolve(result)
                }
            })
        })
    }

    selectRangePrice(inicio, fim){
        return new Promise(async (resolve, reject ) =>{
            const db = await conexao();
            var query = { "preco" : { "$gte" : inicio , "$lte" : fim }};
            console.log(query)
            db.collection('cars').find(query).toArray((error, result) =>{
                if(error) {
                    console.error('erro so buscar carros com intervalo de preco', error);
                    reject(error);
                } else {
                    resolve(result)
                }
            })
        })
    }
}

module.exports = new Select;