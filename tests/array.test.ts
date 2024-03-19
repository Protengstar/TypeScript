describe('Array', function() {
    it('should same with javascript', function() {

        const names: string[] = ["sifaul", "lukman", "nico"];
        const values: number[] = [1,2,3];

        console.info(names);
        console.info(values);
    });
    // READ ONLY ARRAY
    it('should support readonly array', function() {
        
        const hobbies: ReadonlyArray<string> = ["Berenang", "Menggambar"];
        console.info(hobbies);
        console.info(hobbies[0]);
        console.info(hobbies[1]);

        // hobbies[0] = "membaca";
    });
    // TUPLE ARRAY
    it('should support tuple', function() {

        const person: readonly [string, string, number] = ["Sifaul", "lukman", 30];
        console.info(person[0]);
        console.info(person[1]);
        console.info(person[2]);

        // person[0] = "nico";
    });
});