const express = require('express');

const server = express();

server.get('/usuario', (req, res) => {
    return res.send("Ésse é o seu usuário")
})

server.get('/usuario2', (req, res) => {
    return res.send("Ésse é o seu usuário 2")
})

server.listen(3000)