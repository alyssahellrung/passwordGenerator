// Write a function that takes user input and creates a password
// based on that input and returns it

// PSEUDOCODE
// Several prompts
// --Length (between 8 and 128 characters)
// --Lowercase letters
// --Uppercase letters
// --Numerical characters
// --Special characters
// Validate that at least one character type has been selected
// When all prompts are answered, password should be generated (return?)
// Alert result



function generatePassword() {
  /****
   * WRITE YOUR CODE HERE
   */
  alert("I am in generate password");

  return "sometext";
}

//////////////////////////////////////////////////////////////
// DO NOT TOUCH THE CODE BELOW
//////////////////////////////////////////////////////////////
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
