const fs = require('fs');

// read file with call back
// fs.readFile('first.js',(err,data)=>{
// 	console.log(data.toString());
// });

// it will read file in synchronization
// data = fs.readFileSync('first.js');
// console.log(data);

// fs.writeFile('second.txt','arjun bala',()=>{
// 	console.log('File Written Success');
// });

// fs.appendFile('second.txt',' darshan college',()=>{
// 	console.log('File Written Success');
// });

fs.unlink('second.txt',(err)=>{
	console.log('file deleted')
});

console.log('Bye Bye');