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
    it('should support default value', function() {
        function sayHello(name: string = "Guest"): string {
            return `Hello ${name}`;
        }
        expect(sayHello()).toBe("Hello Guest");
        expect(sayHello('sifaul')).toBe("Hello sifaul");
    });
    it('should support rest parameter', function() {
        function sum(...values: number[]): number {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });
    it("should support optional parameter", function () {
        function sayHello(firstName : string, lastName? : string): string {
            if (lastName) {
                return `Hello ${firstName} ${lastName}`;
            }
            else {
                return `Hello ${firstName}`;
            }
        }
        expect(sayHello('sifaul')).toBe('Hello sifaul');
        expect(sayHello('musthofa', 'sifaul')).toBe('Hello musthofa sifaul');
    });
});