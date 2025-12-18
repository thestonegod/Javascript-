let userInput = prompt("Enter a series of letters to create a word");
userInput += "ch";
if (/^[a-zA-Z]+$/.test(userInput.slice(0, -2)) && userInput.endsWith("ch")) {
  alert("You win! The resulting word is: " + userInput);
} else {
  alert("Try again! Make sure your input contains only letters and the resulting word ends with 'ch'.");
}


