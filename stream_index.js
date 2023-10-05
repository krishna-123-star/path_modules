const fs = require("node:fs")

const readableStream = fs.createReadStream("./file.txt", {
    encoding: "utf-8",
    highWaterMark: 2,
})

const writabkeStream = fs.createWriteStream("./file2.txt")

readableStream.on("data", (chunk) => {
console.log(chunk)
writabkeStream.write(chunk)
})
//He
// ll
// o 
// KR
// is
// h
