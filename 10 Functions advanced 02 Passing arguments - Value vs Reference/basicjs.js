/* Functions advanced 02 */

// Passing arguments - value vs reference


const flight = "LH123"
const Ivan = {
    name: "Ivan Gor",
    passport: 13251245
}

const checkIn = function (flightNum, passenger) {
    flightNum = "LH999"
    passenger.name = "Mr. ' + passenger.name"
        if(passenger.passport === 13251245) {
            alert ("Checked in")
        } else {alert("Wrong passport")}
}

// checkIn(flight, Ivan)
// console.log(flight)
// console.log(Ivan)

// const passenger = Ivan
// const flightNum = flight

const newPassport = function (person) {
    person.passport = Math.trunc(Math.random() * 100000000000)
    console.log(person.passport)
}

newPassport(Ivan)
checkIn(flight, Ivan)


