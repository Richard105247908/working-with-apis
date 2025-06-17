document.getElementById("click-btn").addEventListener("click",() =>{
    console.log("works")
    
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data=>{
            console.log(data)
        })
})