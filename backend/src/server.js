const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const socketio = require('socket.io');
const http = require('http');

const app = express();
const server = http.Server(app);
const io = socketio(server);

const connectedUsers = {};

mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-omfry.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})


io.on('connection', socket => {
    const { user_id } = socket.handshake.query;

    connectedUsers[user_id] = socket.id;
});


app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectedUsers;

    return next();
})

//GET, POST, PUT, DELETE
//BUSCAR, CRIAR, EDITAR, DELETAR
//req.query == acessar os query params  --- Pegar os dados  que vem pela URL em um GET (filtros)
//req.params == acessar route params    --- Pegar os dados que vem junto com a URL (edição e delete)
//req.body == acessar corpo da requisição --- para criação e edição de registros

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

server.listen(3333);
