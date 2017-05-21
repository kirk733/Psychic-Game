 
$(document).ready(function() {

  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var wins = 0;
  var losses = 0;
  var guessesLeft = 10;
  var randomLetter = letters[Math.floor(Math.random() * letters.length)];
  console.log(randomLetter);


// Let's start by grabbing a reference to the <span> below.
 //     var userText = document.getElementById("user-text");
    var userText = document.getElementById("user-guesses");
    var userEntry = document.getElementById("user-gleft");
    var userLosses = document.getElementById("user-losses")
    var userWins = document.getElementById("user-wins")
    userEntry.textContent = guessesLeft;
     
      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {
         if (guessesLeft == 0) {
            losses++;
            userLosses.textContent = losses;
            userText.textContent = "";
            guessesLeft = 10;
            userEntry.textContent = guessesLeft;
            randomLetter = letters[Math.floor(Math.random() * letters.length)];
          }

          else if ( randomLetter == event.key) {
            wins++;
            userWins.textContent = wins;
            userText.textContent = "";
            guessesLeft = 10;
            userEntry.textContent = guessesLeft;
            randomLetter = letters[Math.floor(Math.random() * letters.length)]; 
            console.log(randomLetter);
          }

          else {
            guessesLeft = guessesLeft -1;
            userEntry.textContent = guessesLeft;
            userText.textContent += event.key; 
          } 
      };

});
  