describe('Any', function() {
    it('should support in typescript', function() {

        const person: any = {
            id: 1,
            name: "sifaul",
            age: 18
        };

        person.age = 19;
        person.address = "indonesia";

        console.info(person);
    });
});