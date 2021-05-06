/* Fcns && Arrow fcns */

// FCNs vs. Arrow FCNs


const ioann = {
    firstName: 'Ioann',
    year: 1991,
    calcAge: function () {
        console.log(2037 - this.year)
        const isMillenial = () => {
        console.log(this.year >= 1981 && this.year <= 1996)
        }
        isMillenial()
    },

    greet: () => console.log(`Hey ${ioann.firstName}`)
}


console.log(this.firstName)

ioann.greet()
ioann.calcAge()

const addExpr = function (a, b) {
    console.log(arguments)
    return a + b
}
addExpr(2, 5)
addExpr(2, 5, 8, 9, 3)

var addArrow = (a, b) => {
    console.log(arguments)
    return a + b
}

addArrow(1, 7)