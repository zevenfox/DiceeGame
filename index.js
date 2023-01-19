// var randomNumber1 = Math.floor(Math.random()*6 + 1);
// var randomNumber2 = Math.floor(Math.random()*6 + 1);

// var randomDice1 = "images/dice" + randomNumber1 + ".png"; //change source image by random number
// var randomDice2 = "images/dice" + randomNumber2 + ".png";

// var image1 = document.querySelectorAll("img")[0];
// var image2 = document.querySelectorAll("img")[1];


// image1.setAttribute("src", randomDice1);


function getRandom(){
    var randomNumber1 = Math.floor(Math.random()*6 + 1);
    var randomNumber2 = Math.floor(Math.random()*6 + 1);

    var randomDice1 = "images/dice" + randomNumber1 + ".png"; //change source image by random number
    var randomDice2 = "images/dice" + randomNumber2 + ".png";

    var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomDice1);
    var image2 = document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

    if (randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins!"
    }
    else if (randomNumber1 < randomNumber2){
        document.querySelector("h1").innerHTML = "Player 2 wins!"
    }
    else {
        document.querySelector("h1").innerHTML = "Draw!"
    }
}