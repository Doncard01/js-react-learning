/**
 * @param {number} min
 * @param {number} max
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let firstCard = randomInt(2, 11);
let secondCard = randomInt(2, 11);
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackjack = false;
let loosed = false;
let message = "";

let messageEl = document.getElementById('message-el');
let cardsEl = document.getElementById('cards-el');
let sumEl = document.getElementById('sum-el');
let playerEl = document.getElementById('player-el');

// TODO: Liczenie wygranej, stan konta

let player = {
    nickname: "Adam",
    chips: 145,
    sayHello: function() {
        console.log("Hello, I'm " + this.nickname + " and I've got $" + this.chips);
    }
}

playerEl.textContent = player.nickname + ": $" + player.chips;
player.sayHello();

function startGame() {
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: " + cards[0] + ", " + cards[1];

    for (let i=2; i < cards.length; i++) {
        cardsEl.textContent += ", " + cards[i];
    }

    sumEl.textContent = "Sum: " + sum;

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        hasBlackjack = true;
        message = "Wohooo! You've got Blackjack!";
    } else {
        message = "You're OUT OF THE GAME!";
        loosed = true;
    }
    
    messageEl.textContent = message;
}

function newCard() {
    if (hasBlackjack === false && loosed === false) {
        let card = randomInt(2, 11);
        cards.push(card)
        sum += card;
        renderGame();
    } else {
        alert("You've already loosed!");
    }

}