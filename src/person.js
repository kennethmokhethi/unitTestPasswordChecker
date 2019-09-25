class Person {
  // constructor of the class
  constructor(name, age, gender, interest) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.interest = interest;
  }
  // method that prints the detrails of the person
  hello() {
    let lastInterest = this.interest.pop();
    return `Hello my name is ${this.name} and I am ${this.age} years old.My interest are ${this.interest} and ${lastInterest}.`;
  }
}
