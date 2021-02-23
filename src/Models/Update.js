const conexao = require('../../db');

class Update {

    async updateOne(condicao, dados){
        const db = await conexao();
        var query = condicao;
        var newValues = { $set: dados};

        db.collection('customers').updateOne(query, newValues, (error, result) =>{
            if(error) console.error('erro ao atualizar item no DB', error);
            console.log('item atualizado com sucesso');
        })
    }

    async updateAll(condicao, dados){
        const db = await conexao();
        var query = condicao;
        var newValues = { $set: dados};

        db.collection('customers').updateMany(query, newValues, (error, result) =>{
            if(error) console.error('erro ao atualizar todos os itens selecionados no DB', error);
            console.log('todos os itens selecionados foram atualizados com sucesso')
        })
    }
}

module.exports = new Update;