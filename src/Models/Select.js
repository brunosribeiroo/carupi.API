const conexao = require('../../db');
class Select{

    async selectAll(){
        const db = await conexao();

        db.collection('customers').find({}).toArray((error, result) =>{
            if(error) console.error('erro ao buscar todos os itens do DB', error)
            console.log(result)
        })
    }

    async selectOne(dados){
        const db = await conexao();
        var query = dados;
        db.collection('customers').find(query).toArray((error, result) =>{
            if(error) console.error('erro ao buscar item no DB', error);
            console.log(result)
        })
    }

    async selectRangeYear(inicio, fim){
        const db = await conexao();
        var query = { "ano" : { "$gte" : inicio , "$lte" : fim} };
        db.collection('customers').find(query).toArray((error, result) =>{
            if(error) console.error('erro ao buscar carros com intervalo de ano', error);
            console.log(result)
        })
    }

    async selectRangePrice(inicio, fim){
        const db = await conexao();
        var query = { "preco" : { "$gte" : inicio , "$lte" : fim} };
        db.collection('customers').find(query).toArray((error, result) =>{
            if(error) console.error('erro so buscar carros com intervalo de preco', error);
            console.log(result)
        })
    }
}

module.exports = new Select;