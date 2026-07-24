const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$!%^&*()_+[]{}|;:,.<>?";
let gen = document.getElementById("generate-btn");
let passwordDisplay = document.getElementById("password-display"); // gets the value for the first box where the password is displayed
let passwordBox = document.getElementById("password-box");
let generatedPassword = ""; // sets value of boxes to empty string so that it can be filled with new password
let passwordLength = 8; // maximum length of password is set to 8 characters
function generatePassword() {
    generatedPassword = ""; // resets the value of the generated password to an empty string so that it can be filled with new random characters every time the function is called
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        generatedPassword += chars[randomIndex]; // the empty string we had before is now filled with the random characters from the chars variable
    } return generatedPassword;
} // this function generates a random password based on the characters in the chars variable and the specified password length
function generate() {
    passwordDisplay.textContent = generatePassword(); //calls the function to generate a password and displays it in the first box
    passwordBox.textContent = generatePassword(); // calls the function to generate a password and displays it in the second box
} // both boxes will display a different password because the function is called twice and generates a new random password each time
console.log(generatePassword());