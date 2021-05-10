/* Short circuiting && and || */

// || Use ANY data type, return ANY data type, short-circuiting

restaurant = {
    name: "Pizzeria Romana",
    mainMenu: ["pizza", "pasta", "calcone", "salads"],
    founded: "since 1887",
    orderPizza: function (mainIngredient, ...otherIngredients) {
        console.log(mainIngredient)
        console.log(otherIngredients)
    },
}

console.log(3 || "Jonas")
console.log("" || "Ioann")
console.log(true || 0)
console.log(undefined || null)

restaurant.numGuests = 23
const guests2 = restaurant.numGuests || 10
console.log(guests2)


//* && operator

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach")


//* ?? operator (null and undefined)

const guestCorrect = restaurant.numGuests ?? 10
console.log(guestCorrect)