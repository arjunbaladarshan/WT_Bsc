const fs = require('fs');

const data = fs.readFileSync('fsDemo.js');

console.log(data.toString());
console.log('Program End')