const express = require('express');
const app = express();
const cors = require('cors');
const io = require('socket.io');
const path = require('path');
const http = require('http').Server(app);
const bodyParser = require('body-parser');
const sockets = require('./socket.js');
const server = require('./listen.js');

//cross origin
app.use(cors());
//body parser
app.use(bodyParser.json());
//define port number
const PORT = 3000;
//socket setup
sockets.connect(io, PORT);
//start server
let server = http.listen(PORT, 
    function () { 
        let host = server.address().address; 
        let port = server.address().port; 
        console.log("Http server script: on"); 
        console.log("Server listening on: "+ host + " port: " + port);
    });