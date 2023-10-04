const path = require("path");
//14 diffrent properties we use 7
console.log(__filename)
// /home/xminds/Documents/Node/index.js
console.log(__dirname)
///home/xminds/Documents/Node
console.log(path.basename(__filename))
// index.js
console.log(path.basename(__filename))
// index.js

console.log(path.extname(__filename))
//.js
console.log(path.extname(__dirname))
//

console.log(path.parse(__filename))
//{
    // root: '/',
    // dir: '/home/xminds/Documents/Node',
    // base: 'index.js',
    // ext: '.js',
    // name: 'index'
//   }

console.log(path.basename(__filename))
// index.js
console.log(path.format(path.parse(__filename)))
// /home/xminds/Documents/Node/index.js
console.log(path.isAbsolute(__filename))
// true
console.log(path.isAbsolute("./data.json"))
// false


console.log(path.join("folder1", "folder2", "index.html"))
//Output:- folder1/folder2/index.html

console.log(path.join("/folder1", "folder2", "index.html"))
//Output:- /folder1/folder2/index.html

console.log(path.join("/folder1", "//folder2", "index.html"))
//Output:- /folder1/folder2/index.html

console.log(path.join("/folder1", "//folder2", "../index.html"))
//Output:- /folder1/index.html

console.log(path.join(__dirname, "data.json"))
//Output:- /home/xminds/Documents/Node/data.json


console.log(path.resolve("folder1", "folder2", "index.html"))
///home/xminds/Documents/Node/folder1/folder2/index.html

console.log(path.resolve("/folder1", "folder2", "index.html"))
///folder1/folder2/index.html

console.log(path.resolve("/folder1", "//folder2", "index.html"))
///folder2/index.html

console.log(path.resolve("/folder1", "//folder2", "../index.html"))
///index.html

console.log(path.resolve(__dirname, "data.json"))
///home/xminds/Documents/Node/data.json

