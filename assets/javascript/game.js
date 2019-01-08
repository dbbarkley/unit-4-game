

function gameFunction() {
    $("#user_score").text(counter);
    var scoreToGuess = Math.floor(Math.random() * 102) + 19;
    $("#random_number").text(scoreToGuess);

    $(counter).val(" ");
    console.log(counter);

    var wins = 0;

    var losses = 0;

    var counter = 0;

    var redCrystalValue = Math.floor(Math.random() * 12) +1;

    var blueCrystalValue = Math.floor(Math.random() * 12) +1;

    var greenCrystalValue = Math.floor(Math.random() * 12) +1;

    var orangeCrystalValue = Math.floor(Math.random() * 12) +1;


    $(".red-crystal").on("click", function() {
        counter += redCrystalValue;
        $("#user_score").text(counter);  

        if (counter == scoreToGuess) {
            wins += 1;
            $("#wins").text(wins);
            alert("You Win!");
                         
            $("#user_score").text("0");

            gameFunction();
        }
    
        else if (counter >= scoreToGuess) {
            losses += 1;
            $("#losses").text(losses);
            alert("You Lose!"); 
    
            $("#user_score").text("0");

            gameFunction();
        }
    });
    
    $(".blue-crystal").on("click", function() {
        counter += blueCrystalValue;
        $("#user_score").text(counter);  

        if (counter === scoreToGuess) {
            wins += 1;
            $("#wins").text(wins);
            alert("You Win!");


            $("#user_score").text("0");

            gameFunction();
        }
    
        else if (counter >= scoreToGuess) {
            losses += 1;
            $("#losses").text(losses);
            alert("You Lose!");


            $("#user_score").text("0");

            gameFunction();
        }
    });

    $(".green-crystal").on("click", function() {
        counter += greenCrystalValue;
        $("#user_score").text(counter);  
        
        if (counter === scoreToGuess) {
            wins += 1;
            $("#wins").text(wins);
            alert("You Win!");

            $("#user_score").text("0");

            gameFunction();
        }
    
        else if (counter >= scoreToGuess) {
            losses += 1;
            $("#losses").text(losses);
            alert("You Lose!");

            $("#user_score").text("0");

            gameFunction();
        }
    });

    $(".orange-crystal").on("click", function() {
        counter += orangeCrystalValue;
        $("#user_score").text(counter);  

        if (counter === scoreToGuess) {
            wins += 1;
            $("#wins").text(wins);
            alert("You Win!");

            $("#user_score").text("0");

            gameFunction();
        }
    
        else if (counter >= scoreToGuess) {
            losses += 1;
            $("#losses").text(losses);
            alert("You Lose!");

            $("#user_score").text("0");

            gameFunction();
        }
    });

}



window.onload = gameFunction;
