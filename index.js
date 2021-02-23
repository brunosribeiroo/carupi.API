const customExpress = require('./src/Config/CustomExpress');
const app = customExpress();
const Select = require('./src/Models/Select');
const Insert = require('./src/Models/Insert');
const Update = require('./src/Models/Update');
const Delete = require('./src/Models/Delete');

const PORT = 8080;
app.listen(PORT, () =>{
    console.log('Servidor rodando na porta:', PORT);
    Select.selectAll();
});


/*Insert.insertOne({marca: 'ATRAS',
modelo: 'corsa',
versao: 'joy',
ano: '2005',
quilometragem: '180.000',
cambio: 'manual',
preco: '15.000'})*/
