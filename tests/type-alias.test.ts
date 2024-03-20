import { Category, Product } from "../src/type-alias"

describe('Type Alias', function() {
    it('should support in typescript', function() {

        const category: Category = {
            id: "1",
            name: "Handphone",
            description: "Hello Worls"
        };
        const product: Product = {
            id: "1",
            name: "Realme6",
            price: 4000000,
            category: category,
            description: "Say Hello"
        };
        console.info(category);
        console.info(product);
    });
});