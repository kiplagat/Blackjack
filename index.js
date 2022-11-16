

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let message = ""
let sum = 0
let isAlive = false
let hasBlackJack = false

function getRandomCard(){
   let  randomCard = Math.floor(Math.random()*13) + 1
   if(randomCard > 10){
    return 10
   }else if( randomCard === 1){
    return 11
   }else{
    return randomCard
   }


}

function startGame(){
    var player = {
        myname: "Eric",
        chips: 235

    }
    document.getElementById("player-el").innerHTML= player.myname +": $" + player.chips
    isAlive = true
    let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards = [firstCard,secondCard]
   sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    document.getElementById("cards-el").innerHTML="Cards:" 
    for(i=0;i<cards.length;i++){
        document.getElementById("cards-el").innerHTML += cards[i] + " "  
    }
    document.getElementById("sum-el").innerHTML="Sum:" + sum
    
if(sum < 21 ){
    document.getElementById("message-el").innerHTML = "Pick another card" 
}else if(sum === 21){
    document.getElementById("message-el").innerHTML = "You've Won"
    hasBlackJack = true
}else{
    document.getElementById("message-el").innerHTML = "You're out"
    isAlive = false
}
}

function newCard(){
    if(isAlive === true && hasBlackJack === false){
let thirdCard = getRandomCard()
sum += thirdCard
cards.push(thirdCard)
renderGame()
    }
}
