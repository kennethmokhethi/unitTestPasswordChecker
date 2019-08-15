describe("Password checker.One condition is not met",()=>{
  it("Check for null password",()=>{
    var password=null;
    var ansP=passwordCheck(password);
    expect(ansP).toBe("Error:The password is null");


  });
 
  it("Check for characters length",()=>{
      var password="hagsbx";
      var ansP=passwordCheck(password);
      expect(ansP).toBe("Error:The password needs to have 8 or more characters,atleast one upper case letter and atleast a number");
  });

  it("Check upper case letters",()=>{
    var password="hsgd2hsg";
    var ansP=passwordCheck(password);
    expect(ansP).toBe("Error:The password need to contain atleast one uppercase letter")
  });

  it("Check for lower case letter",()=>{
    var password="HDCGDB3H";
    var ansP=passwordCheck(password);
    expect(ansP).toBe("Error:The password need to contain atleast one lower case letter")
  });

  it("Check for numbers",()=>{
    var password="Hgafsvgt";
    var ansP=passwordCheck(password);
    expect(ansP).toBe("Error:The password needs to contain atleast one number")

  });




});


describe("Password checker.Multiply conditions are not met",()=>{
  it("Has lower cases only",()=>{
     var password="gdghs";
     var ansP=passwordCheck(password);
     expect(ansP).toBe("Error:The password needs to have 8 or more characters,atleast one upper case letter and atleast a number")
  });

  it("Has uppercase only",()=>{
    var password="HAFSV";
    var ansP=passwordCheck(password);
    expect(ansP).toBe("Error:The password needs to have 8 or more characters, atleast a lower case letter and atleast a number")
  });

  it("Password with characters less than 8 and no lower case",()=>{
   var password="H2K3";
   var ansP=passwordCheck(password);
   expect(ansP).toBe("Error:The password needs to have 8 or more characters and atleast a lower case letter")

  });

  it("Passwords that has numbers only",()=>{
   var password="123456789";
   var ansP=passwordCheck(password);
   expect(ansP).toBe("Error:The password needs to have atleast a upper and lower case letters")
  });

  fit("Passwords that has numbers only with characters less than 8",()=>{
   var password="12345";
   var ansP=passwordCheck(password);
   expect(ansP).toBe("Error:The password needs to have 8 or more charecters,atleast a upper and lower case letters")
  });





});