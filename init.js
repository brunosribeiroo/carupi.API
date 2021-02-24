const conexao = require('./db');

function createCollection(){
    return new Promise(async (resolve, reject) =>{
        const db = await conexao();
        db.createCollection('cars', (error, result) =>{
            if(error) {
                console.error('erro ao criar a collection cars', error);
                reject(error);
            } else {
                console.log('collection cars criada com sucesso');
                resolve(true);
            }
        })
    })
}

function addDefaultCars(){
    return new Promise( async (resolve, reject) =>{

        const db = await conexao();

        myArrayCars = [
            { marca: 'GM', modelo: 'corsa', versao: 'joy', ano: '2005', quilometragem: '180.000', cambio: 'manual', preco: '15.000' },
            { marca: 'GM', modelo: 'cobalt', versao: 'LT', ano: '2014', quilometragem: '90.000', cambio: 'automatico', preco: '39.990' },
            { marca: 'VW', modelo: 'polo', versao: 'TSI', ano: '2019', quilometragem: '65.000', cambio: 'automatico', preco: '69.000' },
            { marca: 'FIAT', modelo: 'toro', versao: 'volcano', ano: '2020', quilometragem: '15.000', cambio: 'automatico', preco: '91.000' },
            { marca: 'TOYOTA', modelo: 'corolla', versao: 'XLI', ano: '2011', quilometragem: '105.000', cambio: 'automatico', preco: '40.500' } 
            ]

        db.collection('cars').insertMany(myArrayCars, (error, result) =>{
            if(error){
                console.error('erro ao adicionar os carros ao DB', error);
                reject(error);
            } else {
                console.log('carros adicionados com sucesso ao DB');
                resolve();
            }
        }) 
    })
}

async function init(){
    const iniciaCollection = await createCollection();
    const iniciaDados = await addDefaultCars();
}

init();

