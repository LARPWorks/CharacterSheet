import http = require('http');
const LethiaReadQueries = require('./Lethia/lethiaReadQueries');
import * as GothicCharacter from "./Lethia/gothicCharacter"

var port = process.env.port || 1337

LethiaReadQueries.myFunction();
let dummyCharacter = LethiaReadQueries.getCharacter(0);

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write(dummyCharacter.name + '\n');
    res.write(dummyCharacter.fatherName + '\n');
    res.write(dummyCharacter.motherName + '\n');
    res.end('Hello World\n');
}).listen(port);