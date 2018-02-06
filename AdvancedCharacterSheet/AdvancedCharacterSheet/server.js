"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var LethiaReadQueries = require('./Lethia/lethiaReadQueries');
var port = process.env.port || 1337;
LethiaReadQueries.myFunction();
var dummyCharacter = LethiaReadQueries.getCharacter(0);
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(dummyCharacter.name + '\n');
    res.write(dummyCharacter.fatherName + '\n');
    res.write(dummyCharacter.motherName + '\n');
    res.end('Hello World\n');
}).listen(port);
//import http = require('http');
//var port = process.env.port || 1337
//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port); 
//# sourceMappingURL=server.js.map