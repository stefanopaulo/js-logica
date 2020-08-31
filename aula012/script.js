const numbers = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
const [firstNumber, , thirdNumber, ...restNumbers] = numbers;

console.log(firstNumber, thirdNumber);
console.log(restNumbers);
