// User input variables
var chooseNumber;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

chars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
upper = [];

var options;

var toUpperCase = function (x) {
  return x.toUpperCase();
};

uppercaseLetters = letters.map(toUpperCase);

var generate = document.querySelector("#generate");

generate.addEventListener("click", function () {
  newPassword = writePassword();
  document.getElementById("password").placeholder = newPassword;
});


//  *****                  *******
// Function to generate the password
//  *****                  *******

function writePassword() {
  // Asks user to choose between 8 and 128 characters
  chooseNumber = parseInt(
    prompt(
      "How many characters do you want your password to be? Choose between 8 and 128"
    )
  );

  if (!chooseNumber) {
    alert("This needs a value! Try again.");
  } else if (chooseNumber < 8 || chooseNumber > 128) {
    chooseNumber = parseInt(
      prompt("You must enter a value between 8-128 to proceed")
    );
  } else {
    confirmNumber = confirm("Do you want your password to have numbers?");
    confirmCharacter = confirm(
      "Do you want your password to have special characters?"
    );
    confirmUppercase = confirm(
      "Do you want your password to have uppercase letters?"
    );
    confirmLowercase = confirm(
      "Do you want your password to have lowercase letters?"
    );
  }

  // If no choices are made for all of the 4 prompts
  if (
    !confirmNumber &&
    !confirmCharacter &&
    !confirmUppercase &&
    !confirmLowercase
  ) {
    options = alert("You must choose at least one of the options!");
  }

  // For 4 options chosen
  else if (
    confirmNumber &&
    confirmCharacter &&
    confirmUppercase &&
    confirmLowercase
  ) {
    options = chars.concat(num, letters, uppercaseLetters);
  }

  // For 3 options chosen
  else if (confirmNumber && confirmCharacter && confirmUppercase) {
    options = chars.concat(num, uppercaseLetters);
  } else if (confirmNumber && confirmCharacter && confirmLowercase) {
    options = chars.concat(num, letters);
  } else if (confirmCharacter && confirmUppercase && confirmLowercase) {
    options = chars.concat(uppercaseLetters, letters);
  } else if (confirmNumber && confirmLowercase && confirmUppercase) {
    options = num.concat(letters, uppercaseLetters);

    // For 2 options chosen
  } else if (confirmCharacter && confirmNumber) {
    options = chars.concat(num);
  } else if (confirmCharacter && confirmUppercase) {
    options = chars.concat(uppercaseLetters);
  } else if (confirmCharacter && confirmLowercase) {
    options = chars.concat(letters);
  } else if (confirmUppercase && confirmNumber) {
    options = uppercaseLetters.concat(num);
  } else if (confirmUppercase && confirmLowercase) {
    options = uppercaseLetters.concat(letters);
  } else if (confirmLowercase && confirmNumber) {
    options = letters.concat(num);
  }

  // For 1 option chosen
  else if (confirmCharacter) {
    options = chars;
  } else if (confirmNumber) {
    options = num;
  } else if (confirmUppercase) {
    options = upper.concat(uppercaseLetters);
  } else if (confirmLowercase) {
    options = letters;
  }

  var password = [];

  // For random selection of variables
  for (var i = 0; i < chooseNumber; i++) {
    var chooseOption = options[Math.floor(Math.random() * options.length)];
    password.push(chooseOption);
  }

  var newPassword = password.join("");
  UserInput(newPassword);
  return newPassword;
}

// Runs the function

function UserInput(newPassword) {
  document.getElementById("password").textContent = newPassword;
}
