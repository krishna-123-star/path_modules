const fs = require("node:fs")

console.log("First")
const fileC = fs.readFileSync("./file.txt", "utf-8")

console.log(fileC)
//<Buffer 48 65 6c 6c 6f 20 58 6d 69 6e 64 73>
// Hello Xminds
console.log("Second")
fs.readFile("./file.txt", "utf-8",(error, data) => {
    if(error) {
        console.log(error)
    } else{
        console.log(data)
    }
})

console.log("THird")

//sync
fs.writeFileSync("./greet.txt", "Hello krish")
fs.writeFile("./greet.txt", " Hello world", {flag:"a"},(err) => {
    if(err){
        console.log(err)
    } else {
        console.log("Written")
    }
})
//First
// Hello Xminds
// Second
// THird
// Written
// Hello Xminds
