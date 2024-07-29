let cards = []
let sum = 0;
let cardsEl = document.getElementById("cards-el")
let saveEl = document.getElementById("sum-el")
let messageEl = document.getElementById("message-el")
let message = ""
let isAlive = false
let hasBlackJack = false

function randomCard(){
    let number = Math.floor(( Math.random()) * 13) + 1
    if (number > 10) {
        return 10
    } else if (number === 1) {
        return 11
    } else {
        return number
    }
}
function startGame() {
    isAlive = true
    let firstCard = randomCard();
    let secondCard = randomCard();
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    randerGame()
}

function randerGame(){
    cardsEl.textContent = "Cards: "
    for(i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    saveEl.innerText = "Sum: " + sum
    if(sum < 21){
        message = "Do you want a new card?"
    } else if ( sum === 21){
        hasBlackJack = true
        message = "You got BLACK JACK"
    } else {
        isAlive = false
        message = "You are out!"
    }
    messageEl.innerText = message
}
function newCard() {
    if(isAlive === true && hasBlackJack === false){
        let thirdCard = randomCard();
        sum += thirdCard;
        cards.push(thirdCard);
        randerGame() 
    }
}