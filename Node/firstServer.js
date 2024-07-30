const http = require('http');

const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type','text/html');
	if(req.url=="/favicon.ico"){
		res.end(' ');
	}
	else if(req.url=="/home"){
		res.end('Welcome Home');
	}
	else if(req.url=="/contact"){
		res.end('My COntact<br/> info = <h2>12313211313</h2>')
	}
	else{
		console.log(req.url);
		res.end('Hello world rajkot gujarat, INDIA');	
	}
});

server.listen(3000,()=>{
	console.log("server started at 3000");
});