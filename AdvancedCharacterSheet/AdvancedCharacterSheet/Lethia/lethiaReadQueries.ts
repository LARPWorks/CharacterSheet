//const GothicCharacter = require('./gothicCharacter');
import * as GothicCharacter from "./gothicCharacter"

module.exports = {
    myFunction: function () {
      console.log("here!");
    },
    getCharacter: function (id: number) {
        let foundCharacter = new GothicCharacter.GothicCharacter.GothicCharacter();
        console.log(foundCharacter.name);
        console.log(foundCharacter.fatherName);
        console.log(foundCharacter.motherName);
        return foundCharacter;
    }
};