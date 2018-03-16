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
    res.write(dummyCharacter.pc_name + '\n');
    res.write(dummyCharacter.pc_image + '\n');
    res.write(dummyCharacter.character_name + '\n');
    res.write(dummyCharacter.culture + '\n');
    res.write(dummyCharacter.culture_1 + '\n');
    res.write(dummyCharacter.culture_2 + '\n');
    res.write(dummyCharacter.culture_3 + '\n');
    res.write(dummyCharacter.pc_hometown + '\n');
    res.write(dummyCharacter.hometown_skill_1 + '\n');
    res.write(dummyCharacter.hometown_skill_2 + '\n');
    res.write(dummyCharacter.social + '\n');
    res.write(dummyCharacter.social_1 + '\n');
    res.write(dummyCharacter.social_2 + '\n');
    res.write(dummyCharacter.social_3 + '\n');
    res.write(dummyCharacter.mom_name + '\n');
    res.write(dummyCharacter.mom_job + '\n');
    res.write(dummyCharacter.mom_skill + '\n');
    res.write(dummyCharacter.dad_name + '\n');
    res.write(dummyCharacter.dad_job + '\n');
    res.write(dummyCharacter.dad_skill + '\n');
    res.write(dummyCharacter.faith + '\n');
    res.write(dummyCharacter.devotion + '\n');
    res.write(dummyCharacter.fav_attr + '\n');
    res.write(dummyCharacter.strength + '\n');
    res.write(dummyCharacter.speed + '\n');
    res.write(dummyCharacter.fortitude + '\n');
    res.write(dummyCharacter.resolve + '\n');
    res.write(dummyCharacter.intelligence + '\n');
    res.end('Hello World\n');

    //call html w/react bits here
}).listen(port);