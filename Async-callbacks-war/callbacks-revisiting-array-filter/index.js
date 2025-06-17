function handleClick() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(res => res.json())
        .then(data => console.log(data))
}

document.getElementById("new-deck").addEventListener("click", handleClick)

const people = [
    { name: "Jack", hasPet: true },
    { name: "Jill", hasPet: false },
    { name: "Alice", hasPet: true },
    { name: "Bob", hasPet: false },
]

// const peopleWithPets = people.filter(function() {
    
// })

const results = people.filter(peoples => peoples.hasPet.valueOf("True"))
//people.filter(peoples => peoples.hasPet) works thesame

console.log(results) 

///////////////////////////////////
function gimmeThePets(person) {
    return person.hasPet
}

const peopleWithPets = people.filter(gimmeThePets)
console.log(peopleWithPets)