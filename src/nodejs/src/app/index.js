const express = require('express');
const Server = require('socket.io');
const app = express();
const expressServer = app.listen(9000);
const io = Server(expressServer, {path: '/events/socket.io', cors: {
        origin: "*",
        methods: ["GET", "POST"]
    }});
io.on('connection', (socket)=>{
    socket.on('messageToServer', (dataFromClient)=>{
        console.log(dataFromClient)
    })
});
const rabbit = require("./rabbitmq");
rabbit.bindSocketIO(io)
