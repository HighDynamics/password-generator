var alphabet = "abcdefghijklmnopqrstuvwxyz"
var lowercaseLettersArray = alphabet.split("")
var uppercaseLettersArray = alphabet.toUpperCase().split("")
var specialCharactersArray = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~".split("");

// random value generators
var lowercaseGenerator = function() {
  var index = Math.floor(Math.random() * 27)
  return lowercaseLettersArray[index]
}

var uppercaseGenerator = function() {
  var index = Math.floor(Math.random() * 27)
  return uppercaseLettersArray[index]
}

var numberGenerator = function() {
  return Math.floor(Math.random() * 10)
}

var specialCharacterGenerator = function() {
  var index = Math.floor(Math.random() * specialCharactersArray.length)
  return specialCharactersArray[index]
}

// define user preferences
var userPreferences = {
  length: null,
  letters: null,
  numbers: null,
  specialCharacters: null,
};

var getUserPreferences = function () {
  // reset all preferences
  userPreferences = {
    length: null,
    letters: null,
    numbers: null,
    specialCharacters: null,
  };

  // get the length
  var length = 0;
  while (length < 8 || length > 128) {
    length = prompt(
      "How long should the password be?\nPlease enter a number between 8 and 128."
    );
    if (length < 8 || length > 128) {
      alert("Invalid length. Please try again.");
    } else {
      userPreferences.length = parseInt(length);
    }
  }

  // get letter preference
  var includeLetters = 0;
  while (includeLetters < 1 || includeLetters > 4) {
    includeLetters = prompt(
      "Should the password contain these types of letters? \n1: both UPPERCASE and LOWERCASE\n2: UPPERCASE only\n3: LOWERCASE only\n4: neither\nPlease enter the number associated with your preference."
    );
    switch (parseInt(includeLetters)) {
      case 1:
        userPreferences.letters = "both";
        break;
      case 2:
        userPreferences.letters = "uppercase";
        break;
      case 3:
        userPreferences.letters = "lowercase";
        break;
      case 4:
        userPreferences.letters = false;
        break;
      default:
        alert("Invalid response. Please select a number between 1 and 4.");
    }
  }
  // get number preference
  var includeNumbers = 0;
  while (includeNumbers < 1 || includeNumbers > 2) {
    includeNumbers = prompt(
      "Should the password include numbers?\n1: YES\n2: NO\nPlease enter the number associated with your preference."
    );

    switch (parseInt(includeNumbers)) {
      case 1:
        userPreferences.numbers = true;
        break;
      case 2:
        userPreferences.numbers = false;
        break;
      default:
        alert("Invalid response. Please enter 1 or 2.");
    }
  }

  // get special character preference
  var includeSpecialCharacters = 0;
  while (includeSpecialCharacters < 1 || includeSpecialCharacters > 2) {
    includeSpecialCharacters = prompt(
      "Should the password include special characters?\n1: YES\n2: NO\nPlease enter the number associated with your preference."
    );

    switch (parseInt(includeSpecialCharacters)) {
      case 1:
        userPreferences.specialCharacters = true;
        break;
      case 2:
        userPreferences.specialCharacters = false;
        break;
      default:
        alert("Invalid response. Please enter 1 or 2.");
    }
  }

  // verify at least one option was selected
  if(!userPreferences.letters && !userPreferences.numbers && !userPreferences.specialCharacters){
    alert("Password must contain letters, numbers, or special characters. Please try again.");
    getUserPreferences();
  }
};

var generatePassword = function () {
  getUserPreferences();
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
