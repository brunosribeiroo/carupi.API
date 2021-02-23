const ParamsToJSON = require('../Helpers/ParamsToJSON');
const Select = require('../Models/Select');

class ControllerSelect{

    async selectAll(res){
        try {
            const selectAll = await Select.selectAll();
            res.send(selectAll);
        } catch (error) {
            console.error(error);
        }
    }

    async selectOne(dados, res){
        try {
            const paramsToJSON = await ParamsToJSON.queryToJSON(dados);
            const select = await Select.selectOne(paramsToJSON);
            res.send(select);
        } catch (error) {
            console.error(error)
        }
    }

    async selectRangeYear(inicio, fim, res){
        try {
            const select = await Select.selectRangeYear(inicio, fim);
            res.send(select);
        } catch (error) {
            console.error(error);
        }
    }

    async selectRangePrice(inicio, fim, res){
        try {
            const select = await Select.selectRangePrice(inicio, fim);
            res.send(select);
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = new ControllerSelect;