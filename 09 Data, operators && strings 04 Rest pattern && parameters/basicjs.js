/* Rest pattern && parameters */


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
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient)
        console.log(otherIngredients)
    },
}


// Spread, because on RIGHT side of = 
const arr = [1, 2, ...[3, 4]]


// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others)


const [pizza, , risotto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza, risotto, otherFood)
console.log(pizza, risotto, ...otherFood)


//* Objects

const {sat, ...weekdays} = restaurant.openingHours
console.log(weekdays)


//* Functions

const add = function (...numbers) {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) 
    sum += numbers[i]
    console.log(sum)
}

add(1, 3, 7)
add(5, 8, 124)
add(22, 49, 87)

const x = [23, 5, 7]
add(...x)

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach")
restaurant.orderPizza("mushrooms")
