// Global var's ====================================================
var redCrystalValue = Math.floor(Math.random() * 12) +1;
var blueCrystalValue = Math.floor(Math.random() * 12) +1;
var greenCrystalValue = Math.floor(Math.random() * 12) +1;
var orangeCrystalValue = Math.floor(Math.random() * 12) +1;
var counter = 0;
var wins = 0;
var losses = 0;
var scoreToGuess = Math.floor(Math.random() * 102) + 19;
// function to get a new random number to guess ====================
function newNumberToGuess() {
    $("#user_score").text(counter);
    scoreToGuess = Math.floor(Math.random() * 102) + 19;
    $("#random_number").text(scoreToGuess);
}
// Win or Lose functions ===========================================
function win() {
    wins += 1;
    $("#wins").text(wins);
    alert("You Win!");
}
function lose() {
    losses += 1;
    $("#losses").text(losses);
    alert("You Lose!"); 
}
// Function to reset the game var's once the user wins/losses ======
function reset() {
    counter = 0;
    redCrystalValue = Math.floor(Math.random() * 12) +1;
    blueCrystalValue = Math.floor(Math.random() * 12) +1;
    greenCrystalValue = Math.floor(Math.random() * 12) +1;
    orangeCrystalValue = Math.floor(Math.random() * 12) +1;
    newNumberToGuess();
    $("#user_score").text("0");
}
// Main game function/logic ========================================
function gameFunction() {

    // Red crystal logic
    $(".red-crystal").on("click", function() {
        counter += redCrystalValue;
        $("#user_score").text(counter);  
        if (counter === scoreToGuess) {
            win();
            reset();
        }else if (counter >= scoreToGuess) {
            lose();
            reset();
        }
    });
    // Blue crystal logic
    $(".blue-crystal").on("click", function() {
        counter += blueCrystalValue;
        $("#user_score").text(counter);  
        if (counter === scoreToGuess) {
            win();
            reset();
        }else if (counter >= scoreToGuess) {
            lose();
            reset();
        }
    });
    // Green crystal logic
    $(".green-crystal").on("click", function() {
        counter += greenCrystalValue;
        $("#user_score").text(counter);  
        if (counter === scoreToGuess) {
            win();
            reset();
        }else if (counter >= scoreToGuess) {
            lose();
            reset();
        }
    });
    // Orange crystal logic
    $(".orange-crystal").on("click", function() {
        counter += orangeCrystalValue;
        $("#user_score").text(counter);  
        if (counter === scoreToGuess) {
            win();
            reset();
        }else if (counter >= scoreToGuess) {
            lose();
            reset();
        }
    });
}
// Run game
newNumberToGuess();
gameFunction();