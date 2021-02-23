const Update = require('../Models/Update');

class ControllerUpdate{

   async updateOne(dados, res){
        try {
            const updateOne = await Update.updateOne(dados);
            res.send('Carro atualizado com sucesso.');
        } catch (error) {
            console.log(error);
        }
   }

   async updateAll(dados, res){
       try {
           const updateAll = await Update.updateAll(dados);
           res.send('Carros atualizados com sucesso.');
       } catch (error) {
           console.error(error);
       }
   }
}

module.exports = new ControllerUpdate;