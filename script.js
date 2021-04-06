
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
    confirmUpperCase = confirm("Will this contain uppercase letters?");
    confirmLowerCase = confirm("Will this contain lowercase letters?");
  };

  if (!confirmCharacter && !confirmNumbers && !confirmUpperCase && !confirmLowerCase) {
    choices = alert("You must include what criteria you want!");

  }

  else if (confirmCharacter && confirmNumbers && confirmUpperCase && confirmLowerCase) {

    choices = character.concat(numbers, lowerCase, upperCase);
  }

  else if (confirmCharacter && confirmNumbers && confirmUpperCase) {
    choices = character.concat(numbers, upperCase);
  }
  else if (confirmCharacter && confirmNumbers && confirmLowerCase) {
    choices = character.concat(numbers, lowerCase);
  }
  else if (confirmCharacter && confirmLowerCase && confirmUpperCase) {
    choices = character.concat(lowerCase, upperCase);
  }
  else if (confirmNumbers && confirmLowerCase && confirmUpperCase) {
    choices = numbers.concat(lowerCase, upperCase);
  }

  else if (confirmCharacter && confirmNumbers) {
    choices = character.concat(numbers);

  } else if (confirmCharacter && confirmLowerCase) {
    choices = character.concat(lowerCase);

  } else if (confirmCharacter && confirmUpperCase) {
    choices = character.concat(upperCase);
  }
  else if (confirmLowerCase && confirmNumbers) {
    choices = lowerCase.concat(numbers);

  } else if (confirmLowerCase && confirmUpperCase) {
    choices = lowerCase.concat(upperCase);

  } else if (confirmNumbers && confirmUpperCase) {
    choices = numbers.concat(upperCase);
  }

  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumbers) {
    choices = numbers;
  }
  else if (confirmLowerCase) {
    choices = lowerCase;
  }


  var password = [];

  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}

var ps = password.join("");
UserInput(ps);
return ps;

function UserInput(ps) {
  document.getElementById("password").textContent = ps;

}


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
