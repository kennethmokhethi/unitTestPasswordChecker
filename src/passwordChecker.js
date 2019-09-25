//function that validates password to ensure that all requirements of a password are met

var conditionsMet = 0;
function password_is_valid(password) {
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
  try {
    if (passNul == false) {
      conditionsMet += 2;
      if (passLength == true) {
        conditionsMet += 2;
        if (passUpperCase == true) {
          ++conditionsMet;
          if (passLowerCase == true) {
            ++conditionsMet;
            if (passNum == true) {
              ++conditionsMet;
            } else {
              throw "The password needs to contain atleast one number";
            }
          } else {
            throw "The password need to contain atleast one lower case letter";
          }
        } else {
          throw "The password need to contain atleast one uppercase letter";
        }
      } else {
        throw "The lengh of the password is less than to 8 characters";
      }
    } else {
      throw "The password is null";
    }
  } catch (err) {
    return "Error: " + err;
  }

  return conditionsMet;
}

///If the 3 conditions are met then the function will return true

function password_is_ok(password) {
  var numConditionMet = password_is_valid(password);

  if (numConditionMet < 4) return false;

  return true;
}
