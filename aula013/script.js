const person = {
    firstName: 'Luiz',
    lastName: 'Miranda',
    age: 30,
    address: {
        street: 'Av Brasil',
        number: 320
    }
};

const { firstName, lastName, age, address: { street, number } } = person;

console.log(firstName, lastName, age, street, number);
