import { Employee, Manager } from "../src/employee";
import { Seller } from "../src/seller";

describe('Interface.test.ts', function() {
    it('should support in typescript', function() {
        const seller: Seller = {
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
    it('should support function interface', function() {
        interface AddFunction {
            (value1: number, value2: number): number
        }
        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };
        expect(add(2,3)).toBe(5);
    });
// INDEXABLE INTERFACE
    it('should support indexable interface', function() {
        interface StringArray {
            [index: number]: string
        }
        const names : StringArray = ["MUSTHOFA", "SIFAUL", "QULUB"];
        console.info(names);
    });
    it('should support indexable interface non number index', function() {
        interface StringDictionary {
            [key: string]: string;
        }
        const dictionary: StringDictionary = {
            "name" : "sifaul",
            "address" : "jember",
        }
        expect(dictionary["name"]).toBe("sifaul");
        expect(dictionary["address"]).toBe("jember");
    });
// EXTENDING INTERFACE
    it('should support extends interface', function() {
        const employee: Employee = {
            id: "1",
            name: "musthofa",
            division: "IT",
        };
        const manager: Manager = {
            id: "2",
            name: "sifaul",
            division: "IT",
            numberOfEmployees: 14,
        };
    });
});