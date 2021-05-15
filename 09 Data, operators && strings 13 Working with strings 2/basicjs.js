/* Working with strings 2 */

// description


const airline = "TAP Air Portugal"

console.log(airline.toLowerCase())
console.log(airline.toUpperCase())

//* Fixing capitalization


const passenger = "iVaN"
const passengerLower = passenger.toLowerCase()
const passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
console.log(passengerCorrect)

//* Comparing emails


const email = "hello@ivan.io"
const loginEmail = " Hello@Ivan.Io \n'"

// const lowerEmail = loginEmail.toLowerCase()
// const trimmedEmail = lowerEmail.trim()
// console.log(trimmedEmail)

const normalizedEmail = loginEmail.toLowerCase().trim()
console.log(normalizedEmail)

//* Replacing


const priceEU = "288,97EUR"
const priceUS = priceEU.replace("EUR", "$").replace(",", ".")
console.log(priceUS)

const announcement = "All passengers come to barding door 23. Boarding door 23!"

console.log(announcement.replaceAll("door", "gate"))

//* Booleans


const plane = "Airbus A320pro"
console.log(plane.includes("A320"))
console.log(plane.includes("Boeing"))
console.log(plane.startsWith("Air"))

if (plane.startsWith("Airbus") && plane.endsWith("pro")) {
    console.log("Part of the new Airbus model family")
}

const checkBaggage = function (items) {
    const baggage = items.toLowerCase()
    if (baggage.includes('rifle') || baggage.includes("knife")) {
        console.log("You shall not pass!!!")
    } else {console.log("Welcome aboard!")}
}

checkBaggage("I've gotta laptop, some Stuff and a Rifle")
checkBaggage("Just an infantry grenade and my little minigun")
checkBaggage("I have my wallet, my snacks and a sharp knife")

