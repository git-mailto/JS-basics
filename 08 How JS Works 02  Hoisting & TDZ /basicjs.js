/* Hoisting & TDZ */

// Hoisting & dead zone


// * Variables

console.log(me)
console.log(job)
console.log(year)

var me = 'Ivan'
let job = 'developer'
const year = 1989


// * Functions

console.log(addDecl(2,3))
console.log(addExpr(2,3))
console.log(addArrow(2,3))

function addDecl (a, b) {
    return a + b
}

const addExpr = function (a, b) {
    return a + b
}

const addArrow = (a, b) => a + b

