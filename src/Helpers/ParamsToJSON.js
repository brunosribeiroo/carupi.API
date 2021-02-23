class ParamsToJSON{

    queryToJSON(dados){
        return new Promise((resolve, reject) =>{
            var replace = dados.replace(/\s/g, '');
            var partes = replace.split(':');
            var data = {};
            data[partes[0]] = partes[1];
            resolve(data);
            reject();
        })
    }
}

module.exports = new ParamsToJSON;