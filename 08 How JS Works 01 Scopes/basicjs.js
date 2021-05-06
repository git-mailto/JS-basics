/* Scopes */

// Global, function & block scopes

function calcAge(birthYear) {
    const age = 2037 - birthYear

    function printAge() {
        const output = `${firstName}, You are ${age}, born in ${birthYear}`
        console.log(output)

        if (birthYear >= 1981 && birthYear <= 1996) {
            var millenial = true
            const firstName = 'Steven'
            const str = `Oh, and you're a millenial, ${firstName}`
            console.log(str)

            function add(a, b) {
                return a + b
            }
        }
        console.log(millenial)
        console.log(add(2, 3))
    }
    printAge()

    return age
}

const firstName = 'Jonas'
console.log(calcAge(1991))
