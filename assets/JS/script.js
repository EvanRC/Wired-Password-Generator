// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var passwordlength = parseInt(prompt ("enter password length"))
  if (passwordlength < 8 || passwordlength > 126 || isNaN (passwordlength) ){//or ||  and && not !
    return "please enter valid length"
  }
  var upperCaseLetters = confirm ("Would you like to have uppercase letters in your password?")
  var upperLowerCase = confirm ("Would you like to have Lowercase letters in your password?")
  var numbers = confirm ("Would you like to have numbers in your password?")
  var symbols = confirm ("Would you like to have symbols in your password?")
  
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
