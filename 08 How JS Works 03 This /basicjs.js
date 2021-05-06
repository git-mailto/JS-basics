/* This keyword */

// this.

console.log(this)

const calcAge = function (birthYear) {
    console.log(2037 - birthYear)
    console.log(this)
}

calcAge(1989)


const ivan = {
    year: 1989,
    calcAge: function () {
        console.log(this)
        console.log(2037 - this.year)
    }
}
ivan.calcAge()


const dasha = {
    year: 2017,
}

dasha.calcAge = ivan.calcAge
dasha.calcAge()

const f = ivan.calcAge

f()
