/* Maps */

// Mapsmapsmaps


const rest = new Map()
rest.set("name", "Classico Italiano")
rest.set(1, "Firenze, Italy")
rest.set(2, "Lisbon, Portugal")

console.log(rest.set(2, "Lisbon, Portugal"))

rest.set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
.set("open", 11)
.set("closes", 23)
.set(true, "we are open")
.set(false, "we are closed")

console.log(rest.get("name"))
console.log(rest.get(true))

const time = 21
console.log(rest.get(time > rest.get("open") && time < rest.get("close")))

console.log(rest.has("categories"))
rest.delete(2)
console.log(rest)
console.log(rest.size)
// rest.clear()
const arr = [1, 2]
rest.set(arr, "Test")
rest.set([1,2], "Test")
rest.set(document.querySelector("h1"), "Heading")
console.log(rest)

console.log(rest.get(arr))
