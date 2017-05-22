 

 //make sure document ready before page loads
 $(document).ready(function() {

  //variable declaration
  var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var wins = 0;
  var losses = 0;
  var guessesLeft = 10;
  var randomLetter = letters[Math.floor(Math.random() * letters.length)];



  //user variables to identify with html element
  var userText = document.getElementById("user-guesses");
  var userEntry = document.getElementById("user-gleft");
  var userLosses = document.getElementById("user-losses")
  var userWins = document.getElementById("user-wins")

  //set guesses left to 10
  userEntry.textContent = guessesLeft;
     
      // Next, we give JavaScript a function to execute when onkeyup event fires.
      document.onkeyup = function(event) {

        // code to check for loss and reset
         if (guessesLeft == 0) {
            losses++;
            userLosses.textContent = losses;
            alert("YOU LOST!!");
            userText.textContent = "";
            guessesLeft = 10;
            userEntry.textContent = guessesLeft;
            randomLetter = letters[Math.floor(Math.random() * letters.length)];

          }

          // code to check for winner and reset
          else if ( randomLetter == event.key) {
            wins++;
            userWins.textContent = wins;
            alert("YOU WON!!");
            userText.textContent = "";
            guessesLeft = 10;
            userEntry.textContent = guessesLeft;
            randomLetter = letters[Math.floor(Math.random() * letters.length)]; 
            
          }

          // code to countdown guesses and display guess on screen
          else {
            guessesLeft = guessesLeft -1;
            userEntry.textContent = guessesLeft;
            userText.textContent += event.key; 
          } 
      };

});
  