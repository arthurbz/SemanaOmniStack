const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://omnistack:horses@cluster0-omfry.mongodb.net/omniDB?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//GET, POST, PUT, DELETE
//BUSCAR, CRIAR, EDITAR, DELETAR
//req.query == acessar os query params  --- Pegar os dados  que vem pela URL em um GET (filtros)
//req.params == acessar route params    --- Pegar os dados que vem junto com a URL (edição e delete)
//req.body == acessar corpo da requisição --- para criação e edição de registros

app.use(express.json());
app.use(routes);
app.listen(3333);
