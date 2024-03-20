"use strict";
describe('Function', function () {
    it('should support in typescript', function () {
        function sayHello(name) {
            return `Hello ${name}`;
        }
        expect(sayHello("sifaul")).toBe("Hello sifaul");
        function printHello(name) {
            console.info(`Hello${name}`);
        }
        printHello("sifaul");
    });
});
