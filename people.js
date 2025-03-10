const { userHobbies } = require("./hobbies.js")
const { credentials } = require("./names.js")


const firstName = "nome"
const lastName = "cognome"
const hobbyOne = "firstHobby"
const hobbyTwo = "secondHobby"
const hobbyThree = "thirdHobby"

function fullUserData() {
    const tempFullName = { ...credentials(firstName, lastName) }
    const tempHobbies = { ...userHobbies(hobbyOne, hobbyTwo, hobbyThree) }

    const fullName = Object.values(tempFullName).join(" ")
    const hobbies = Object.values(tempHobbies).join()
    const fullData = { fullName, hobbies }
    return fullData
}

console.log(fullUserData());
