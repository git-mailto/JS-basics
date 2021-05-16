/* Functions advanced 01 */

// Default parameters

const bookings = []

const createBooking = function (flightNum, 
    numPassengers = 1, 
    price = 199 * numPassengers
    ) {
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking("LH123")
createBooking("LH123", 2, 849)
createBooking("LH123", 2)
createBooking("LH123", 4)
createBooking("LH123", undefined, 49)