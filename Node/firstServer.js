const http = require('http');

const server = http.createServer((req,res)=>{
	res.end('Good Morning');
});

server.listen(3000,()=>{
	console.log('server started at 3000')
})