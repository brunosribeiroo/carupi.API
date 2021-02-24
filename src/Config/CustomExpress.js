const express = require('express');
const bodyParser = require('body-parser');
const rotas = require('../Rotas/Rotas');

module.exports = () => {
    const app = express();

    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    rotas(app);
    return app;
}