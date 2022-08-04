let dice1 = document.querySelector(".random1");
let dice2 = document.querySelector(".random2");
let nadpis = document.querySelector("h1");

function onClick() {
    let randomNumber1 = Math.floor((Math.random() * 6) + 1);
    let randomNumber2 = Math.floor((Math.random() * 6) + 1);

    dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
    dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        nadpis.textContent = "Player 1 wins!";
    } else if (randomNumber2 > randomNumber1) {
        nadpis.textContent = "Player 2 wins!";
    } else {
        nadpis.textContent = "Draw!";
    }

}


