class Human {
  gender = 'female';
  printGender = () => {
    console.log(this.gender);
  };
}
class Person extends Human {
  name = 'JungSub';
  gender = 'male';
  printMyName = () => {
    console.log(this.name);
  };
}

const person = new Person();
person.printMyName();
person.printGender();

// class Human {
//   constructor() {
//     this.gender = 'female';
//   }
//   printGender() {
//     console.log(this.gender);
//   }
// }
// class Person extends Human {
//   constructor() {
//     super();
//     this.name = 'JungSub';
//     this.gender = 'male';
//   }
//   printMyName() {
//     console.log(this.name);
//   }
// }

// const person = new Person();
// person.printMyName();
// person.printGender();
