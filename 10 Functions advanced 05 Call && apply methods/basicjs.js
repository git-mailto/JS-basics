/* Call && apply methods */

// description


const lufthansa = {
    airline: "Lufthansa",
    iataCode: "LH",
    bookings: [],
    book (flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`)
        this.bookings.push({flight: `${this.iataCode} ${flightNum}, name`})
    }
}

lufthansa.book(231, "Ivan Gor")
lufthansa.book(183, "Peter Boyko")
console.log(lufthansa)

const eurowings = {
    airline: "Eurowings",
    iataCode: "EW",
    bookings: [],
}

const book = lufthansa.book

book.call(eurowings, 23, "Sarah Williams")
book.call(lufthansa, 239, "Mary Brown")

const swissAir = {
    airline: "Swiss Airlines",
    iataCode: "LX",
    bookings: []
}

book.call(swissAir, 582, "Jane Bells")

const flightData = [583, "George Cooper"]
book.apply(swissAir, flightData)
console.log(swissAir)
book.call(swissAir, ...flightData)