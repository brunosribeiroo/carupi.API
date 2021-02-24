const Select = require('../Models/Select');
const Insert = require('../Models/Insert');
const Update = require('../Models/Update');
const Delete = require('../Models/Delete');
const ControllerSelect = require('../Controllers/ControllerSelect');
const ControllerInsert = require('../Controllers/ControllerInsert');
const ControllerUpdate = require('../Controllers/ControllerUpdate');
const ControllerDelete = require('../Controllers/ControllerDelete');

module.exports = app => {


    app.get('/', (req, res) =>{
        res.send('Olá Mundo!')
    });


    //INSERT

    app.post('/cars', (req, res) =>{
        ControllerInsert.insertOne(req.body, res);
    });



    //SELECT

    app.get('/cars?', (req, res) =>{
        if(req.query.condicao){
            var dados = req.query.condicao;
            ControllerSelect.selectOne(dados,res);
        } else {
            ControllerSelect.selectAll(res);
        }
    });

    app.get('/cars/year?', (req, res) =>{
        var inicio = req.query.inicio;
        var fim = req.query.fim;
        ControllerSelect.selectRangeYear(inicio, fim, res);
    })

    app.get('/cars/price?', (req, res) => {
        var inicio = req.query.inicio;
        var fim = req.query.fim;
        ControllerSelect.selectRangePrice(inicio, fim, res);
    });


    //UPDATE
    app.post('/cars/update', (req, res) =>{
        ControllerUpdate.updateOne(req.body, res);
    });

    app.post('/cars/update/all', (req, res) =>{
        ControllerUpdate.updateAll(req.body, res);
    });


    //DELETE
    app.post('/cars/delete', (req, res) =>{
        ControllerDelete.deleteOne(req.body, res);
    });

    app.post('/cars/delete/many', (req, res) =>{
        ControllerDelete.deleteMany(req.body, res);
    });
}