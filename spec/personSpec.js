describe("The person class", () => {
  it("Should return the person details suc as name,age,gender and interest", () => {
    //    Instantiating the object
    let person = new Person("Mike", 20, "male", [
      "reading",
      "soccer",
      "hockey"
    ]);
    // calling the hello function and storing its retunr data on greeting variable.
    let greeting = person.hello();
    expect(greeting).toBe(
      "Hello my name is Mike and I am 20 years old.My interest are reading,soccer and hockey."
    );
  });
});
