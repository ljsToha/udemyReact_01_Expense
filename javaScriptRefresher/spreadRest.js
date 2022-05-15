const person = {
  name: 'Max',
};

const newPerson = {
  ...person,
  age: 33,
};

console.log(newPerson);

const filter = (a, b, ...args) => {
  return args.filter((n) => n === 3);
};

console.log(filter(1, 2, 3, 4, 5));
