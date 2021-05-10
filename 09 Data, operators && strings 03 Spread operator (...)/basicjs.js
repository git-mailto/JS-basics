/* Spread operator (...) */

// Spread operator (...)


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

    orderPasta: function(ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`)
    }
}


const arr = [7, 8, 9]

const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr)

const newArr = [1, 2, ...arr]
console.log(newArr)

console.log(...newArr)

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu)


//* Coping array

const mainMenuCopy = [...restaurant.mainMenu]


//* Joining 2 arrays

const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(...fullMenu)


//* Iterables: arrays, strings, maps, sets. NOT Objects!

const str = 'Ioann'
const letters = [...str, ' ', 'S.']
console.log(letters)
console.log(...str)

// const ingredients = [
//     prompt('Let\'s make pasta! Ingredient 1?'), 
//     prompt("Ingredient 2?"), 
//     prompt("Ingredient 3?")
// ]

// console.log(ingredients)

// restaurant.orderPasta(...ingredients)


//* Objects

const newRestaurant = {
    ...restaurant, 
    founder: "Guiseppe", 
    foundedIn: 1887
}

console.log(newRestaurant)

const restaurantCopy = {
    ...restaurant
}

restaurantCopy.brand = "Restoracia de la Roma"

console.log(restaurantCopy.brand)
console.log(restaurant.brand)
