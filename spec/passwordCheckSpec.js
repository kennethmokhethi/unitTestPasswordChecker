describe("Password checker.One condition is not met", () => {
  it("Check for null password", () => {
    var password = null;
    var ansP = password_is_valid(password);
    expect(ansP).toBe("Error: The password is null");
  });

  it("Check upper case letters", () => {
    var password = "hsgd2hsg";
    var ansP = password_is_valid(password);
    expect(ansP).toBe("Error: The password need to contain atleast one uppercase letter")
  });

  it("Check for lower case letter", () => {
    var password = "HDCGDB3H";
    var ansP = password_is_valid(password);
    expect(ansP).toBe("Error: The password need to contain atleast one lower case letter")
  });

  it("Check for numbers", () => {
    var password = "Hgafsvgt";
    var ansP = password_is_valid(password);
    expect(ansP).toBe("Error: The password needs to contain atleast one number")
  });

 it("Password meets the first two conditions",()=>{
  var password = "Hgafsvgt";
  var ansP = password_is_ok(password);
  expect(ansP).toBe(true);

 });



});


