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

        console.log(foundCharacter.pc_name);
        console.log(foundCharacter.pc_image);
        console.log(foundCharacter.character_name);
        console.log(foundCharacter.culture);
        console.log(foundCharacter.culture_1);
        console.log(foundCharacter.culture_2);
        console.log(foundCharacter.culture_3);
        console.log(foundCharacter.pc_hometown);
        console.log(foundCharacter.hometown_skill_1);
        console.log(foundCharacter.hometown_skill_2);
        console.log(foundCharacter.social);
        console.log(foundCharacter.social_1);
        console.log(foundCharacter.social_2);
        console.log(foundCharacter.social_3);
        console.log(foundCharacter.mom_name);
        console.log(foundCharacter.mom_job);
        console.log(foundCharacter.mom_skill);
        console.log(foundCharacter.dad_name);
        console.log(foundCharacter.dad_job);
        console.log(foundCharacter.dad_skill);
        console.log(foundCharacter.faith);
        console.log(foundCharacter.devotion);
        console.log(foundCharacter.fav_attr);
        console.log(foundCharacter.strength);
        console.log(foundCharacter.speed);
        console.log(foundCharacter.fortitude);
        console.log(foundCharacter.resolve);
        console.log(foundCharacter.intelligence);

        return foundCharacter;
    }
};