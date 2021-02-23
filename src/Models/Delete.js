const conexao = require('../../db');

class Delete{

    async deleteOne(condicao){
        const db = await conexao();
        db.collection('customers').deleteOne(condicao, (error, result) =>{
            if(error) console.error('erro ao deletar item do DB', error);
            console.log('item deletado com sucesso');
        })
    }

    async deleteMany(condicao){
        const db = await conexao();
        db.collection('customers').deleteMany(condicao, (error, result) =>{
            if(error) console.error('erro ao pagar os itens selecionados no DB', error);
            console.log('itens selecionados deletados com sucesso')
        })
    }

}

module.exports = new Delete;