const conexao = require ('../../db');


class Insert {

    insertOne(dados){
        return new Promise(async (resolve, reject) =>{
            const db = await conexao();

            var myobj = {
                marca: dados.marca,
                modelo: dados.modelo,
                versao: dados.versao,
                ano: dados.ano,
                quilometragem: dados.quilometragem,
                cambio: dados.cambio,
                preco: dados.preco
            }
    
            db.collection('cars').insertOne(myobj, (error, result) =>{
                if(error) {
                    console.error('erro ao adicionar carro ao DB', error);
                    reject(error);
                } else {
                    resolve(true);
                }
            })
        });
    }
}

module.exports = new Insert;