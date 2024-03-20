describe('Object', function() {
    const person: {id: string, name: string, description: string, hobbies?: string} = {
        id: "1",
        name: "musthofa",
        description: "Hello world"
    };
    console.info(person);

    person.id = "2",
    person.name = "sifaul";
    person.description = "Say Hello"

    console.info(person);
})
