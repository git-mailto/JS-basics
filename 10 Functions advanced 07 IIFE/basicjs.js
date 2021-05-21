/* IIFE */

// Immediately invoked function expressions


const runOnce = function () {
    console.log("This will never run again")
}

runOnce();


(function () {
    console.log("This will never ever run again")
})();

(() => console.log("Not gonna happen!)"))()


{
    const isPrivate = 213
    var notPrivate = 915
}
console.log(notPrivate)
console.log(isPrivate)
