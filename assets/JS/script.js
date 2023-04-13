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
  var lowerCaseLetters = confirm ("Would you like to have Lowercase letters in your password?")
  var numbers = confirm ("Would you like to have numbers in your password?")
  var symbols = confirm ("Would you like to have symbols in your password?")
  var characters = []
  if (upperCaseLetters) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if (lowerCaseLetters) {
    characters += "abcdefghijklmnopqrstuvwxyz"
  }
  if (numbers) {
    characters += "0123456789"
  }
  if (symbols) {
    characters += "!@#$%^&*+=?"
  }  
  /*
  var str = "123"
  var num = 123
  if(str == num){  // just value comparison
    console.log("true")
  }
  if(str === num){ // value and data type
    console.log("not reached -- false")
  }else{
    console.log("Else")
  }
  */
if(characters.length === 0){
  return "Please choose min one"
}
var password = "" 
for( i = 0; i < passwordlength; i ++) {
  var index = Math.floor(Math.random() * characters.length)
  password += characters [index] 
}
return password
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
