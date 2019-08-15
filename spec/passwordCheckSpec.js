describe("Password checker",()=>{
  it("Check for characters length",()=>{
      var passW="hagsbx";
      var ansP=passwordCheck(passW);
      expect(ansP).toBe("Error:The lengh of the password is not equal to 8 characters");
  })


})