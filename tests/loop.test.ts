describe('For Loop', function() { 
    it('should support for loop', function() {
        const names : string[] = ['musthofa', 'sifaul', 'qulub'];

        for(let i = 0; i < names.length; i++) {
            console.info(names[i]);
        }
        for(const name of names) {
            console.info(name);
        }
        for(const index in names) {
            console.info(names[index]);
        }
    });
})