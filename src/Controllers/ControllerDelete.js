const { response } = require('express');
const Delete = require('../Models/Delete');

class ControllerDelete{

    async deleteOne(dados, res){
        try {
            const deleteOne = await Delete.deleteOne(dados);
            res.send('Carro deletado com sucesso');
        } catch (error) {
            console.error(error);
        }
    }

    async deleteMany(dados, res){
        try {
            const deleteMany = await Delete.deleteMany(dados);
            res.send('Carros deletados com sucesso.');
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new ControllerDelete;