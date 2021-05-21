/* Closures */

// description


const secureBooking = function () {
    let passengerCount = 0

    return function () {
        passengerCount++
        console.log(`${passengerCount} passengers are at the moment`)
    }
}

const booker = secureBooking ()

booker();
booker();

console.dir(booker)
