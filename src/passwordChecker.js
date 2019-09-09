//function that validates password to ensure that all requirements of a password are met
function passwordCheck(password) {
     //    Deaclaration and iniatialisation of varibales 
     var passLength = false;
     var passUpperCase = false;
     var passLowerCase = false;
     var passNum = false;
     var passNul = true;
     var upperCaseLetters = /[A-Z]/g;
     var lowerCaseLetters = /[a-z]/g;
     var numbers = /[0-9]/g;
     var status;

     // Setting the conditions
     if (password != null) {
          passNul = false;

          if (password.length >= 8) {
               passLength = true;
          }

          if (password.match(upperCaseLetters)) {
               passUpperCase = true;
          }

          if (password.match(lowerCaseLetters)) {
               passLowerCase = true;
          }

          if (password.match(numbers)) {
               passNum = true;
          }
     }


     //Error handling
      try{

          if (passNul == true) throw "Error:The password is null";
          if ((passNul == false) && (passLength == false) && (passUpperCase == true) && (passLowerCase == true) && (passNum == true)) throw "The lengh of the password is less than to 8 characters";
          if ((passNul == false) && (passLength == true) && (passUpperCase == false) && (passLowerCase == true) && (passNum == true)) throw "The password need to contain atleast one uppercase letter";
          if ((passNul == false) && (passLength == true) && (passUpperCase == true) && (passLowerCase == false) && (passNum == true)) throw "The password need to contain atleast one lower case letter";
          if ((passNul == false) && (passLength == true) && (passUpperCase == true) && (passLowerCase == true) && (passNum == false)) throw "The password needs to contain atleast one number";
          if ((passNul == false) && (passLength == false) && (passUpperCase == false) && (passLowerCase == true) && (passNum == false)) throw "The password needs to have 8 or more characters,atleast one upper case letter and atleast a number";
          if ((passNul == false) && (passLength == false) && (passUpperCase == true) && (passLowerCase == false) && (passNum == false)) throw "The password needs to have 8 or more characters, atleast a lower case letter and atleast a number";
          if ((passNul == false) && (passLength == false) && (passUpperCase == true) && (passLowerCase == false) && (passNum == true)) throw "The password needs to have 8 or more characters and atleast a lower case letter"
          if ((passNul == false) && (passLength == true) && (passUpperCase == false) && (passLowerCase == false) && (passNum == true)) throw "The password needs to have atleast a upper and lower case letters";
          if ((passNul == false) && (passLength == false) && (passUpperCase == false) && (passLowerCase == false) && (passNum == true)) throw "The password needs to have 8 or more charecters,atleast a upper and lower case letters";
          if ((passNul == false) && (passLength == false) && (passUpperCase == false) && (passLowerCase == true) && (passNum == true)) throw status = "The password needs to have 8 or more characters and have atleast an upper case letter";
     
     }catch(err){
          return "Error:" + err;
     }



     

     // // Return status if a specific conndition is met
     // if ((passNul == true)) {
     //      status = "Error:The password is null";
     // } else if ((passNul == false) && (passLength == false) && (passUpperCase == true) && (passLowerCase == true) && (passNum == true)) {
     //      status = "Error:The lengh of the password is less than to 8 characters";
     // } else if ((passNul == false) && (passLength == true) && (passUpperCase == false) && (passLowerCase == true) && (passNum == true)) {
     //      status = "Error:The password need to contain atleast one uppercase letter";
     // } else if ((passNul == false) && (passLength == true) && (passUpperCase == true) && (passLowerCase == false) && (passNum == true)) {
     //      status = "Error:The password need to contain atleast one lower case letter";
     // } else if ((passNul == false) && (passLength == true) && (passUpperCase == true) && (passLowerCase == true) && (passNum == false)) {
     //      status = "Error:The password needs to contain atleast one number";
     // } else if ((passNul == false) && (passLength == false) && (passUpperCase == false) && (passLowerCase == true) && (passNum == false)) {
     //      status = "Error:The password needs to have 8 or more characters,atleast one upper case letter and atleast a number";
     // } else if ((passNul == false) && (passLength == false) && (passUpperCase == true) && (passLowerCase == false) && (passNum == false)) {
     //      status = "Error:The password needs to have 8 or more characters, atleast a lower case letter and atleast a number";
     // } else if ((passNul == false) && (passLength == false) && (passUpperCase == true) && (passLowerCase == false) && (passNum == true)) {
     //      status = "Error:The password needs to have 8 or more characters and atleast a lower case letter"
     // } else if ((passNul == false) && (passLength == true) && (passUpperCase == false) && (passLowerCase == false) && (passNum == true)) {
     //      status = "Error:The password needs to have atleast a upper and lower case letters"
     // } else if ((passNul == false) && (passLength == false) && (passUpperCase == false) && (passLowerCase == false) && (passNum == true)) {
     //      status = "Error:The password needs to have 8 or more charecters,atleast a upper and lower case letters"
     // } else if ((passNul == false) && (passLength == false) && (passUpperCase == false) && (passLowerCase == true) && (passNum == true)) {
     //      status = "Error:The password needs to have 8 or more characters and have atleast an upper case letter";
     // } else {
     //      status = "All requirements were met";
     // }

     return status;

}
