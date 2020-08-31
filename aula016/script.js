const fruit = ['Maçã', 'Uva', 'Pera', 'Laranja', 'Morango'];

for (let f in fruit) {
    console.log(fruit[f]);
}

const person = {
    firstName: 'Stefano',
    lastName: 'Souza',
    age: 25,
    address: {
        street: '78',
        number: 194
    }
};

for (let key in person) {
    console.log(person[key]);
}
