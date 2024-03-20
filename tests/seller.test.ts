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
});