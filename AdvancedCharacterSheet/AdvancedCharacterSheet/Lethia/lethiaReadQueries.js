"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//const GothicCharacter = require('./gothicCharacter');
var GothicCharacter = require("./gothicCharacter");
module.exports = {
    myFunction: function () {
        console.log("here!");
    },
    getCharacter: function (id) {
        var foundCharacter = new GothicCharacter.GothicCharacter.GothicCharacter();
        console.log(foundCharacter.name);
        console.log(foundCharacter.fatherName);
        console.log(foundCharacter.motherName);
        return foundCharacter;
    }
};
//# sourceMappingURL=lethiaReadQueries.js.map