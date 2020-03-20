# passwordGenerator
Homework 03

I set up a program to generate a password using user preferences. The html and css were given and were not modified. Some of the JavaScript code was already present, but I had to create the "guts" of the generatePassword function.

I started with the alert, "Let's generate a password!", then prompt the user to choose a password length between 8 and 128 characters. 

I then set up a series of confirm statements asking if the user wants lowercase and/or uppercase letters and/or numbers and/or special characters. These Booleans are stored in the variables "upperCase," "lowerCase," "numbers", and "special".

I set up a validation so that if they do not choose a number between 8 and 128, once the other questions are finished, an alert appears that says the password must be between 8 and 128 characters. Also, if the user does not confirm any of the character types, I alert that they must choose at least one character type.

I then set up four arrays: lowerLetters, upperLetters, numerals, and specialChar. I also set up the variable "password", which is empty to start but will contain the ever-growing string that gets produced down the line.

I merged the arrays (using concat) into every possible combination a user could choose.

I then wrote if and if/else statements for every possible combination. Each statement sets a for loop to keep adding randomly chosen elements from the appropriate array to the password variable until the password is the length the user wanted it to be.

Once the loop finishes, and as long as the user chose a length of 8-128 characters and chose at least one character type, the finished password is returned and the user sees it on their screen. Magic!
