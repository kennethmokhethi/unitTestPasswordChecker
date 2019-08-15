describe("Password checker",()=>{
  it("Check for null password",()=>{
    var password=null;
    var ansP=passwordCheck(password);
    expect(ansP).toBe("Error:The password is null");


  })
 
  it("Check for characters length",()=>{
      var password="hagsbx";
      var ansP=passwordCheck(password);
      expect(ansP).toBe("Error:The password needs to have 8 or more characters,atleast one upper case letter and atleast a number");
  })


})