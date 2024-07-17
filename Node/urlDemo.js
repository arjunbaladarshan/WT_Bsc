const url = require('url');
const path = "https://darshan.ac.in/program/bsc-cs?enno=123123654&name=arjun&age=5";

const q = url.parse(path,false);

console.log(q);