
character =["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numbers = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];



// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  enter = (prompt("How many characters would you like your password to be? Choose between 8 and 128"));
       
  if (!enter) {
    alert("This needs a value");
} else if (enter < 8 || enter > 128) {
  
    enter = (prompt("You must choose between 8 and 128"));

  } else {
    confirmNumbers = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUpperCase = confirm("Will this contain Uppercase letters?");
    confirmLowerCase = confirm("Will this contain Lowercase letters?");
};

if (!confirmCharacter && !confirmNumbers && !confirmUpperCase && !confirmLowerCase) {
  choices = alert("You must include what criteria you want!");

}   

  else if (confirmCharacter && confirmNumbers && confirmUpperCase && confirmLowerCase) {

  choices = character.concat(numbers, lowerCase, upperCase);
  }

  else if (confirmCharacter && confirmNumbers && confirmUppercase) {
    choices = character.concat(numbers, upperCase);
}
else if (confirmCharacter && confirmNumbers && confirmLowercase) {
    choices = character.concat(numbers, lowerCase);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(lowerCase, upperCase);
}
else if (confirmNumbers && confirmLowercase && confirmUppercase) {
    choices = numbers.concat(lowerCase, upperCase);
}



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
