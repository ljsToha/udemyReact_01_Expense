const numbers = [1, 2, 3];
// const [num1, num2] = numbers;
// console.log(num1, num2);
const [num1, , num3] = numbers;
console.log(num1, num3);

const { name, age } = { name: 'JungSub', age: 33 };
console.log(name, age);
