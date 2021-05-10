/* Destructuring objects */

// Destructuring objects, really


const restaurant = {
    brand: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    openingHours: {
        thu: {
            open: 12,
            close: 22,
        },
        fri: {
            open: 11,
            close: 23,
        },
        sat: {
            open: 0,
            close: 24,
        }
    },

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    orderDelivery: function ({
        starterIndex = 1, 
        mainIndex = 0, 
        time = '20:00', 
        address}) {
        console.log(`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`)
    }
}

restaurant.orderDelivery({
    time: '23:30',
    address: 'Via del Sole, 21',
    mainIndex: 2,
    starterIndex: 2,
})

restaurant.orderDelivery({
    address: 'Via del Sole, 21',
    starterIndex: 1,

})

const {brand, openingHours, categories} = restaurant

console.log(brand, openingHours, categories)

const {
    brand: restaurantName, 
    openingHours: hours, 
    categories: tags,
} = restaurant 

console.log(restaurantName, hours, tags)

const {
    menu = [], 
    starterMenu: starters = [],
} = restaurant

console.log(menu, starters)


let a = 111
let b = 999
const obj1 = {
    a: 23,
    b: 7,
    c: 14,
}

console.log(obj1.a, obj1.b)


const {
    fri: {
        open: o, 
        close: c,
    }} = openingHours
console.log(o, c)

