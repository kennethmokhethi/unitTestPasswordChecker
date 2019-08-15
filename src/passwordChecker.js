///
function passwordCheck(password) {
    var passLength=false;
    var passUpperCase=false;
    var passLowerCase=false;
    var passNum=false;
    var allConditions = false;
    var passNul = true;
    var upperCaseLetters = /[A-Z]/g;
    var lowerCaseLetters = /[a-z]/g;
    var numbers = /[0-9]/g;
    var status;

    if (password.length == 8) {
        passLength = true;
     } 
     if (password != null) {
        passNul = false;
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


  if((passNul==true)){
       status="Error:The password is null";
  }else if((passNul==false) && (passLength==false) && (passUpperCase==true) && (passLowerCase==true) && (passNum==true)){
       status ="Error:The lengh of the password is not equal to 8 characters";
  }else if((passNul==false)&& (passLength==true) && (passUpperCase==false) && (passLowerCase==true) && (passNum==true)){
       status="Error:The password need to contain atleast one uppercase letter";
  }else if((passNul==false)&& (passLength==true) && (passUpperCase==true) && (passLowerCase==false) && (passNum==true)){
       status="Error:The password need to contain atleast one lower case letter";
  }else if((passNul==false)&& (passLength==true) && (passUpperCase==true) && (passLowerCase==true) && (passNum==false)){
       status="Error:The password needs to contain atleast one number";
  }else{
       status="All requirements were met";
  }
   
  return status;

}



