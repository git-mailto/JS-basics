/* Optional chaining */

// with optional chaining

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
}

console.log(restaurant.openingHours.mon?.open)
console.log(restaurant.openingHours?.mon?.open)

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]

for (const day of days) {
    const open = restaurant.openingHours[day]?.open ?? "closed"
    console.log(`On ${day}, we open at ${open}`)
}


//* Methods

console.log(restaurant.order?.(0, 1) ?? "Method does not exists")


//* Arrays

const users = [{ 
    name: "Ioann", 
    email: "helloguys@email.io",
}]

// const users = []

console.log(users[0]?.name ?? "No users there")
