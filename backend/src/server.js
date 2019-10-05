const express = require('express');

const app = express();

//GET, POST, PUT, DELETE
//BUSCAR, CRIAR, EDITAR, DELETAR
//req.query == acessar os query params  --- Pegar os dados  que vem pela URL em um GET (filtros)
//req.params == acessar route params    --- Pegar os dados que vem junto com a URL (edição e delete)
//req.body == acessar corpo da requisição --- para criação e edição de registros

app.use(express.json());

app.post('/users', (req, res) => {
    return res.json(req.body);
});

app.listen(3333);

