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
    it('should support function interface', function() {
        interface AddFunction {
            (value1: number, value2: number): number
        }
        const add: AddFunction = (value1: number, value2: number): number => {
            return value1 + value2;
        };
        expect(add(2,3)).toBe(5);
    });
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
});