/* More closures */

// Closures, deeper look


let f

const g = function () {
    const a = 23
    f = function () {
        console.log(a * 2)
    }
}

const h = function () {
    const b = 777
    f = function () {
        console.log(b * 2)
    }
}

g();
f();

h();
f();

g();
f();
// console.dir(f)


const boardPassengers = function (n, wait) {
    const perGroup = n / 3
    setTimeout(function() {
        console.log(`We are now boarding all ${n} passengers`)
        console.log(`There are 3 groups, each with ${perGroup} passengers!`)
    }, wait * 1500)
    console.log(`Will start boarding in ${wait} seconds`)
}

const perGroup = 1002

boardPassengers(177, 3);
