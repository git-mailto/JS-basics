/* Maps iteration */

// Iteration of maps



const question = new Map ([
    ["question", "What is the best programming language in the world?"],
    [1, "C"],
    [2, "Java"],
    [3, "JavaScript"],
    ["correct", 3],
    [true, "Correct!"],
    [false, "Try again!"],
])

console.log(question)
console.log(question.get("question"))
for (const [key, value] of question) {
    if(typeof key === "number") console.log(`Answer ${key}: ${value}`)
}

// const answer = Number(prompt("Your answer"))
// // if(answer === 3) console.log("Correct!!!")
// // else (console.log("Wrong! try again"))

// console.log(question.get(question.get("correct") === answer))

//* Convert map to array

console.log([...question])
console.log(question.entries())
console.log(...question.keys())
console.log(...question.values())
