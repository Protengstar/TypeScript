"use strict";
describe('Array', function () {
    it('should same with javascript', function () {
        const names = ["sifaul", "lukman", "nico"];
        const values = [1, 2, 3];
        console.info(names);
        console.info(values);
    });
    // READ ONLY ARRAY
    it('should support readonly array', function () {
        const hobbies = ["Berenang", "Menggambar"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        // hobbies[0] = "membaca";
    });
    // TUPLE ARRAY
    it('should support tuple', function () {
        const person = ["Sifaul", "lukman", 30];
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);
        // person[0] = "nico";
    });
});
