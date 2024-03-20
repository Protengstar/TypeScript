describe('Interface.test.ts', function () {
    it('should support in typescript', function () {
        const seller = {
            id: 1,
            name: "Toko Baju",
            nib: "0987654321",
            npwp: "0987654321"
        };
        seller.name = "Toko Tas";
        // seller.nib = "1234567890";
        console.info(seller);
    });
    // FUNCTION INTERFACE
    it('should support function interface', function () {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(2, 3)).toBe(5);
    });
    // INDEXABLE INTERFACE
    it('should support indexable interface', function () {
        const names = ["MUSTHOFA", "SIFAUL", "QULUB"];
        console.info(names);
    });
    it('should support indexable interface non number index', function () {
        const dictionary = {
            "name": "sifaul",
            "address": "jember",
        };
        expect(dictionary["name"]).toBe("sifaul");
        expect(dictionary["address"]).toBe("jember");
    });
    // EXTENDING INTERFACE
    it('should support extends interface', function () {
        const employee = {
            id: "1",
            name: "musthofa",
            division: "IT",
        };
        const manager = {
            id: "2",
            name: "sifaul",
            division: "IT",
            numberOfEmployees: 14,
        };
        console.info(manager);
    });
    it('should support function in interface', function () {
        const person = {
            name: "sifaul",
            sayHello: function (name) {
                return `Hello ${name}, my name is ${this.name}`;
            }
        };
        console.info(person.sayHello("musthofa"));
    });
    it('should support intersrctioin types', function () {
        const domain = {
            id: "1",
            name: "sifaul"
        };
        console.info(domain);
    });
});
export {};
