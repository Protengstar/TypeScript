import { CustomerType } from "../src/enum";
describe('Enum', function () {
    it('should support in typescript', function () {
        const customer = {
            id: 1,
            name: "sifaul",
            type: CustomerType.MYTHIC
        };
        console.info(customer);
    });
});
