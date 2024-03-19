"use strict";
describe('Union Type', function () {
    it('should support in typescript', function () {
        let sample = "sifaul";
        console.info(sample);
        sample = 140;
        console.info(sample);
        sample = true;
        console.log(sample);
    });
    it('shauld support typeof operator', function () {
        function proccess(value) {
            if (typeof value === "string") {
                return value.toUpperCase();
            }
            else if (typeof value === "number") {
                return value + 2;
            }
            else {
                return !value;
            }
        }
        expect(proccess("sifaul")).toBe("SIFAUL");
        expect(proccess(140)).toBe(142);
        expect(proccess(true)).toBe(false);
    });
});
