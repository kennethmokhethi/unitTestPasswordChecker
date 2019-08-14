///
function passwordCheck(password) {
    var passLength, passUpperCase, passLowerCase, passNum, allConditions = false;
    var passNul = true;
    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;
    var status=null;

    if (password.length == 8) {
        passLength = true;

    } else if (password != null) {
        passNul = false;
    } else if (password.match(upperCaseLetters)) {
        passUpperCase = true;
    } else if (password.match(lowerCaseLetters)) {
        passLowerCase = true;
    } else if (password.match(numbers)) {
        passNum = true;
    }


  if((passNul==true)){
     status="Error:The password is null";
  }else if((passNul==false)&& (passLength==false) && (passUpperCase==true) && (passLowerCase==true) && (passNum==true)){
       status ="Error:The lengh of the password is not equal to 8 characters";
  }else if((passNul==false)&& (passLength==true) && (passUpperCase==false) && (passLowerCase==true) && (passNum==true)){
       status="Error:The password need to contain atleast one uppercase letter";
  }else if((passNul==false)&& (passLength==true) && (passUpperCase==true) && (passLowerCase==false) && (passNum==true)){
       status="Error:The password need to contain atleast one lower case letter";
  }else if((passNul==false)&& (passLength==true) && (passUpperCase==true) && (passLowerCase==true) && (passNum==false)){
       status="Error:The password needs to contain atleast one number";
  }
    
    return status;


}



