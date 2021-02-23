const conexao = require ('../../db');


class Insert {

    async insertOne(dados){
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

        db.collection('customers').insertOne(myobj, (error, result) =>{
            if(error) console.error('erro ao adicionar carro ao DB', error);
            console.log('carro inserido com sucesso');
        })
    }

    async insertMany(dados){
        const db = await conexao();

        var myArrayCars = dados;

        db.collection('customers').insertOne(myArrayCars, (error, result) =>{
            if(error) console.error('erro ao adicionar carros ao DB', error);
            console.log('carros inseridos com sucesso');
        })
    }
}

module.exports = new Insert;