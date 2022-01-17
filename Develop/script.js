// User input variables
var chooseNumber;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;


chars = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upper = [];

var options;

var toUpperCase = function() {
  return toUpperCase();
};

characters = chars(toUpperCase);

var generate = document.querySelector("#generate");

generate.addEventListener("click", function () {
  newpassword = generatePassword();
  document.getElementById("password").placeholder = newpassword;
});


