/**
 * Challenge: Use your filter array method!
 * Given the above `people` array, return a new array with only people where `hasPet` is true
 * Note: Remember that your callback function will be given the individual item in the array for a parameter
 */

const peopleWithPets = filterArray(people, function(person) {
    return person.hasPet
})

console.log(peopleWithPets)

const peopleWithPets2 = filterArray(people,person=>{
    //const personPet=[] dont need
  return person.hasPet===true
})