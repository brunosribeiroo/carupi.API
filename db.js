const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

const conexao =  
    function conexao(){
        return new Promise((resolve, reject) =>{
            MongoClient.connect(url, {useUnifiedTopology: true}, (erro, db) =>{
                if(erro) console.erro(erro, 'erro ao conectar DB');
                var dbo = db.db('mydb');
                resolve(dbo);
            })
        })
    }
    
module.exports = conexao;



 