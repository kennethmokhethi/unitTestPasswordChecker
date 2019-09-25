class Person {
  constructor(name, age, gender, interest) {
    this.name = name;
    this.age = gender;
    this.interest = interest;
  }

  hello() {
    let lastInterest = this.interest.pop();
    return `Hello my name is ${this.name} and I am ${this.age} years old.My interest are ${this.interest} and ${lastInterest}. `;
  }
}

let person = new Person("Kenneth", 67, "Male", ["reading", "soccer", "hockey"]);
let greeting = person.hello();
console.log(greeting);
