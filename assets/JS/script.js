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
  var passwordlength = parseInt(prompt("enter password length")) //function created for passwrod creation
  if (passwordlength < 8 || passwordlength > 126 || isNaN(passwordlength)) {
    return "please enter valid length"
  }
  var upperCaseLetters = confirm("Would you like to have uppercase letters in your password?") //creates the criteria for the password
  var lowerCaseLetters = confirm("Would you like to have Lowercase letters in your password?")
  var numbers = confirm("Would you like to have numbers in your password?")
  var symbols = confirm("Would you like to have symbols in your password?") //creates the criteria for the password
  var characters = []
  if (upperCaseLetters) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ" //adds uppercase letters to generator
  }
  if (lowerCaseLetters) {
    characters += "abcdefghijklmnopqrstuvwxyz" //adds lowercase letters to generator
  }
  if (numbers) {
    characters += "0123456789" //adds numbers to generator 
  }
  if (symbols) {
    characters += "!@#$%^&*+=?" //adds symbols to generator
  }

  if (characters.length === 0) {
    return "Please select a criteria"
  }// creates error message if no criteria is selected
  var password = ""
  for (i = 0; i < passwordlength; i++) {
    var index = Math.floor(Math.random() * characters.length)
    password += characters[index]
  }
  return password
} //for loop created for password gerneration

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
