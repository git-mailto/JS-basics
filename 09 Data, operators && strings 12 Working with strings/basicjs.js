/* Working with strings */

// description


const airline = "TAP Air Portugal"
const plane = "A320"

console.log(plane[0])
console.log(plane[1])
console.log(plane[2])
console.log(plane[3])
console.log("B737"[0])

console.log(airline.length)
console.log("B737".length)

console.log(airline.indexOf("r"))
console.log(airline.lastIndexOf("r"))
console.log(airline.indexOf("Portugal"))

console.log(airline.slice(4))
console.log(airline.slice(4, 7))

console.log(airline.slice(0, airline.indexOf(" ")))
console.log(airline.slice(airline.lastIndexOf(" ") + 1))

console.log(airline.slice(-2))
console.log(airline.slice(1, -1))

const checkMiddleSeat = function (seat) {
    //   B and E are middle seats
    const s = seat.slice(-1)
    if (s === "B" || s === "E") console.log("Damn! You sit in the middle")
    else console.log("You got lucky!")
}

checkMiddleSeat("11B")
checkMiddleSeat("23C")
checkMiddleSeat("3E")

console.log(new String("Ivan"))
console.log(typeof new String("Ivan"))
console.log(typeof new String("Ivan").slice(1))