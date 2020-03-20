// Write a function that takes user input and creates a password
// based on that input and returns it


function generatePassword() {
  /****
   * WRITE YOUR CODE HERE
   */

  alert("Let's generate a password!");

  var passwordLength = prompt("Choose a password length between 8 and 128 characters");
  var lowerCase = confirm("Would you like to include lowercase letters?");
  var upperCase = confirm("Would you like to include uppercase letters?");
  var numbers = confirm("Would you like to include numerical characters?");
  var special = confirm("Would you like to include special characters?");

  if ((passwordLength >= 8) && (passwordLength <= 128)) {
    if (lowerCase || upperCase || numbers || special) {

      var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
      var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
      var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "="];
      var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
      var password = "";

      var megaArray = lowerLetters.concat(upperLetters, specialChar, numerals);
      var lunArray = lowerLetters.concat(upperLetters, numerals);
      var lusArray = lowerLetters.concat(upperLetters, specialChar);
      var lnsArray = lowerLetters.concat(numerals, specialChar);
      var unsArray = upperLetters.concat(numerals, specialChar);
      var luArray = lowerLetters.concat(upperLetters);
      var lnArray = lowerLetters.concat(numerals);
      var lsArray = lowerLetters.concat(specialChar);
      var unArray = upperLetters.concat(numerals);
      var usArray = upperLetters.concat(specialChar);
      var nsArray = numerals.concat(specialChar);
      
      if (lowerCase && upperCase && numbers && special) {
        for (var i = 0; i < passwordLength; i++) {
          if (password.length < passwordLength) {
            password = password + megaArray[Math.floor(Math.random() * 75)];
          }
        }
      } 

      else if (lowerCase && upperCase && numbers) {
        for (var i = 0; i < passwordLength; i++) {
          if (password.length < passwordLength) {
            password = password + lunArray[Math.floor(Math.random() * 62)];
          }
        }
      }

      else if (lowerCase && upperCase && special) {
        for (var i = 0; i < passwordLength; i++) {
          if (password.length < passwordLength) {
            password = password + lusArray[Math.floor(Math.random() * 65)];
          }
        }
      }

      else if (lowerCase && numbers && special) {
        for (var i = 0; i < passwordLength; i++) {
          if (password.length < passwordLength) {
            password = password + lnsArray[Math.floor(Math.random() * 49)];
          }
        }
      }

      else if (upperCase && numbers && special) {
        for (var i=0; i < passwordLength; i++) {
          if(password.length < passwordLength) {
            password = password + unsArray[Math.floor(Math.random() * 49)];
          }
        }
      }

      else if (lowerCase && upperCase) {
        for (var i=0; i < passwordLength; i++) {
          if(password.length < passwordLength) {
            password = password + luArray[Math.floor(Math.random() * 52)];
          }
        }
      }

      else if (lowerCase && numbers) {
        for (var i=0; i < passwordLength; i++) {
          if(password.length < passwordLength) {
            password = password + lnArray[Math.floor(Math.random() * 36)];
          }
        }
      }

      else if (lowerCase && special) {
        for (var i=0; i < passwordLength; i++) {
          if(password.length < passwordLength) {
            password = password + lsArray[Math.floor(Math.random() * 39)];
          }
        }
      }

      else if (upperCase && numbers) {
        for (var i=0; i < passwordLength; i++) {
          if(password.length < passwordLength) {
            password = password + unArray[Math.floor(Math.random() * 36)];
          }
        }
      }

      else if (upperCase && special) {
        for (var i=0; i < passwordLength; i++) {
          if(password.length < passwordLength) {
            password = password + usArray[Math.floor(Math.random() * 39)];
          }
        }
      }

      else if (numbers && special) {
        for (var i=0; i < passwordLength; i++) {
          if(password.length < passwordLength) {
            password = password + nsArray[Math.floor(Math.random() * 23)];
          }
        }
      }

      else if (lowerCase) {
        for (var i = 0; i < passwordLength; i++) {
          if (password.length < passwordLength) {
            password = password + lowerLetters[Math.floor(Math.random() * 26)];
          }
        }
      }

      else if (upperCase) {
        for (var i = 0; i < passwordLength; i++) {
          if (password.length < passwordLength) {
            password = password + upperLetters[Math.floor(Math.random() * 26)];
          }
        }
      }

      else if (numbers) {
        for (var i = 0; i < passwordLength; i++) {
          if (password.length < passwordLength) {
            password = password + numerals[Math.floor(Math.random() * 10)];
          }
        }
      }

      else if (special) {
        for (var i = 0; i < passwordLength; i++) {
          if (password.length < passwordLength) {
            password = password + specialChar[Math.floor(Math.random() * 13)];
          }
        }
      }
      
    } else {
      alert("You must select at least one option.");
    }
  } else {
    alert("Your password must be between 8 and 128 characters.");
  }

  return password;

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
