/* Working with strings 3 */

// Split method


console.log("a + very + nice + string".split("+"))
console.log("Ivan Gor".split(" "))

const [firstName, lastName] = "Ivan Gor".split(" ")

const newName1 = ["Mr.", firstName, lastName.toUpperCase()].join(" ")
console.log(newName1)

const capitalizeName = function (name) {
    const names = name.split(" ") 
    const namesUpper = []
    for (const every of names) {
        // namesUpper.push(every[0].toUpperCase() + every.slice(1))
        namesUpper.push(every.replace(every[0], every[0].toUpperCase()))
    }
    console.log(...namesUpper)
}

capitalizeName("jessica ann smith davis")


//* Padding a string


const message = "Go to gate number 23!"
console.log(message.padStart(25, "+").padEnd(30, "+"))
console.log("Ivan".padStart(15, "+").padEnd(30, "+"))

const maskCreditCard = function (number) {
    const str = number + ""
    const last = str.slice(-4)
    return last.padStart(str.length, "*")
}

console.log(maskCreditCard(4729491520218344))
console.log(maskCreditCard(3749923740113513))
console.log(maskCreditCard(3844027444027581))

//* Repeat


const message2 = "Bad weather... All Departures are Delayed..."
console.log(message2.repeat(5))

const planesInLine = function (n) {
    console.log(`There are ${n} planes in line ${"planes".repeat(n)}`)
}

planesInLine(3)
planesInLine(5)
planesInLine(7)
