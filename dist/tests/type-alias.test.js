describe('Type Alias', function () {
    it('should support in typescript', function () {
        const category = {
            id: "1",
            name: "Handphone"
        };
        const product = {
            id: "1",
            name: "Realme6",
            price: 4000000,
            category: category
        };
        console.info(category);
        console.info(product);
    });
});
export {};
