describe('Function', function() {
    it('should support in typescript', function() {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }
        expect(sayHello("sifaul")).toBe("Hello sifaul");

        function printHello(name: string): void{
            console.info(`Hello${name}`);
        }
        printHello("sifaul");
    });
});