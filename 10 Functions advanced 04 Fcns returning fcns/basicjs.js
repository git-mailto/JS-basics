/* Fcns returning fcns */

// description


const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet("Hey")

greeterHey("John")
greeterHey("Alex")

greet("Hello")("Ivan")

const greetArr = greeting => name => console.log(`${greeting} ${name}`)

greetArr("Hello")("watcher")

