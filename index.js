const customExpress = require('./src/Config/CustomExpress');
const app = customExpress();
const Select = require('./src/Models/Select');
const Insert = require('./src/Models/Insert');
const Update = require('./src/Models/Update');
const Delete = require('./src/Models/Delete');

const PORT = 8080;
app.listen(PORT, () =>{
    console.log('Servidor rodando na porta:', PORT);
});
