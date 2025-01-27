let player = {
    name: "Player", 
    credits: 145
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

console.log(messageEl)

function startGame(){
    let first_card = getRandomCard()
    let second_card = getRandomCard()
    cards = [first_card, second_card]
    sum = first_card + second_card 
    isAlive = true 
    renderGame()
}

function getRandomCard(){
    let cardValue = Math.floor(Math.random() * 13) + 1
    if (cardValue == 1) {
        return 11 
    } else if (cardValue > 10){
        return 10 
    } else {
        return cardValue
    }
}

function renderGame(){
    sumEl.textContent = "Sum: " + sum
    console.log(sumEl)
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++)
        cardsEl.textContent += cards[i] + " " 
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJack!"
        hasBlackJack = true
    } else {
        message = "You bust! Better luck next time."
        isAlive = false
    }
    messageEl.textContent = message
    console.log(messageEl)
}

function newCard() {
    if (isAlive && hasBlackJack === false) {
        console.log("Drawing a new card!")    
        let card = getRandomCard()
        sum += card
        cards.push(card)
        console.log(cards)
        renderGame()
    }
}