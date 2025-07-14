let deckId
let compScore=0;
let myScore=0;
const cardsContainer = document.getElementById("cards")
const newDeckBtn = document.getElementById("new-deck")
const drawCardBtn = document.getElementById("draw-cards")
const winnerElement=document.getElementById("winner")
const remainingText = document.getElementById("remaining") 

function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => {
            remainingText.textContent= `Remaining cards: ${data.remaining}`
            deckId = data.deck_id
        })
}

newDeckBtn.addEventListener("click", handleClick)

drawCardBtn.addEventListener("click", () => {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            remainingText.textContent= `Remaining cards: ${data.remaining}`
            cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `
            cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `
            
            const resultTitle=determineCardWinner(data.cards[0].value,data.cards[1].value)
            winnerElement.textContent=resultTitle;
            
            if(data.remaining===0){
                drawCardBtn.disabled=true;
            }
            
        })
})
/**
 * Challenge:
 * 
 * Try to determine which of the 2 cards is the "winner" (has higher value)
 * Aces are the card with the highest "score"
 * 
 * In parts:
 * 
 * 1. Create a function that takes 2 card objects as parameters, 
 * `card1` and `card2`. These card objects have a property called
 * `value`, which can be any one of the following strings, in
 * order of rising "score":
 * 
 * "2", "3", "4", "5", "6", "7", "8", "9", 
 * "10", "JACK", "QUEEN", "KING", "ACE"
 * 
 * I.e. "2" is the lowest score and "ACE" is the highest.
 * 
 * The function should determine which of the 2 cards (`card1`
 * or `card2`) has the higher score, or if they have the same score.
 * 
 * Log which card wins (or "It's a tie!" 
 * if they're the same) to the console
 */

//my code
// cardValues={"2":2,"3":3,"4":4,"5":5,"6":6,"7":7,"8":8,"9":9,"10":10, "JACK":11, "QUEEN":12, "KING":13, "ACE":14};

// let score_card=(card1,card2)=>{
//     const card1value=cardValues[card1.value]
//     const card2value=cardValues[card2.value]

//     if (card1value>card2value) {
//         console.log("card 1 wins")
        
//     }else if (card2value>card1value) {
//         console.log("card 2 wins")
        
//     } else {
//         console.log("it a draw")
//     }
    
// };

// score_card({value:"KING"},{value:"9"});

function determineCardWinner(card1, card2) {
    const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9", 
    "10", "JACK", "QUEEN", "KING", "ACE"]
    const card1ValueIndex = valueOptions.indexOf(card1)
    const card2ValueIndex = valueOptions.indexOf(card2)
    console.log("card 1:", card1ValueIndex)
    console.log("card 2:", card2ValueIndex)
    
    if (card1ValueIndex > card2ValueIndex) {
         return "Computer wins!"
    } else if (card1ValueIndex < card2ValueIndex) {
         return "You win!"
    } else {
         return "War!"
    }
}

