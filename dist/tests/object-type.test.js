"use strict";
describe('Object', function () {
    it('should support in typescript', function () {
        const person = {
            id: "1",
            name: "musthofa",
        };
        console.info(person);
        person.id = "2",
            person.name = "sifaul";
        console.info(person);
    });
});
