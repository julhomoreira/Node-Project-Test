const express = require('express');

const server = express();

server.get('/usuario', (req, res) => {
    return res.send("Ésse é o seu usuário")
})

server.get('/usuario2', (req, res) => {

    console.log(req.query.abacaxi)
    return res.send(` O usuário digitou esse valor: , ${req.query.abacaxi}`)
})

server.listen(3000)


