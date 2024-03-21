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
    it("should support function overloading", function () {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any{
            if(typeof value === "string") {
                return value.toUpperCase();
            } else if(typeof value === "number") {
                return value * 10;
            }
        }
        expect(callMe(10)).toBe(100);
        expect(callMe('sifaul')).toBe('SIFAUL');
    });
    it("should support function as parameter", function () {
        function sayHello(name: string, filter: (name: string) => string) {
            return `Hello ${filter(name)}`;
        }
        function toUpper(name: string): string {
            return name.toUpperCase();
        }
        expect(sayHello('sifaul', toUpper)).toBe('Hello SIFAUL');

    // ANONYMOUS FUNCTION
        expect(sayHello('sifaul', function (name: string): string {
            return name.toUpperCase();
        })).toBe('Hello SIFAUL');

    // ARROW FUNCTION
        expect(sayHello('sifaul', (name: string): string => name.toUpperCase())).toBe('Hello SIFAUL');
    });
});